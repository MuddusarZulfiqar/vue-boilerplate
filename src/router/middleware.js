import { useAuthStore } from "@/store";

export function authGuard(to, from, next) {
  const auth = useAuthStore();
  if (!auth.isAuthenticated) {
    return next({ name: "login", query: { redirect: to.fullPath } });
  }
  next();
}

export function guestGuard(to, from, next) {
  const auth = useAuthStore();
  if (auth.isAuthenticated) return next({ name: "home" });
  next();
}

export function roleGuard(allowedRoles = []) {
  return (to, from, next) => {
    const auth = useAuthStore();
    if (!allowedRoles.includes(auth.userRole)) {
      return next({ name: "unauthorized", query: { redirect: to.fullPath } });
    }
    next();
  };
}
