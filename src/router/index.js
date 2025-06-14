import { createRouter, createWebHistory } from "vue-router";
import { authGuard, guestGuard, roleGuard } from "./middleware";

// Layouts
const DefaultLayout = () => import("@/layouts/DefaultLayout.vue");
const AuthLayout = () => import("@/layouts/AuthLayout.vue");
const LocaleLayout = () => import("@/layouts/LocaleLayout.vue");

// Pages
const Home = () => import("@/pages/Home.vue");
const Login = () => import("@/pages/Login.vue");
const Unauthorized = () => import("@/pages/Unauthorized.vue");
const AdminDashboard = () => import("@/pages/admin/AdminDashboard.vue");
const UserDashboard = () => import("@/pages/user/UserDashboard.vue");

// Supported Locales
const supportedLocales = ["en", "fr"];

// Locale Wrapper Route
const withLocale = {
  path: "/:locale",
  component: LocaleLayout,
  beforeEnter: (to, from, next) => {
    const locale = to.params.locale;
    if (!supportedLocales.includes(locale)) {
      return next("/en"); // fallback to default
    }
    next();
  },
  children: [
    // ---------------------------
    // Public Routes
    // ---------------------------
    {
      path: "",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
        {
          path: "unauthorized",
          name: "unauthorized",
          component: Unauthorized,
        },
      ],
    },

    // ---------------------------
    // Auth Routes
    // ---------------------------
    {
      path: "auth",
      component: AuthLayout,
      children: [
        {
          path: "login",
          name: "login",
          component: Login,
          beforeEnter: guestGuard,
        },
      ],
    },

    // ---------------------------
    // Dashboard Routes
    // ---------------------------

    // ✅ Admin-only Group (role checked once here)
    {
      path: "admin",
      component: DefaultLayout,
      beforeEnter: [authGuard, roleGuard(["admin"])],
      children: [
        {
          path: "",
          name: "admin-dashboard",
          component: AdminDashboard,
        },
      ],
    },

    // ✅ User-only Group (role checked once here)
    {
      path: "user",
      component: DefaultLayout,
      beforeEnter: [authGuard, roleGuard(["user"])],
      children: [
        {
          path: "",
          name: "user-dashboard",
          component: UserDashboard,
        },
      ],
    },
  ],
};

// Final Router Setup
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    withLocale,
    { path: "/:pathMatch(.*)*", redirect: "/en" }, // catch-all fallback
  ],
});

export default router;
