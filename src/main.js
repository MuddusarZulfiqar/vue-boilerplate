import { createApp } from "vue";
import App from "./App.vue";
import { registerDirectives } from "@/directives";
import { createPinia } from "pinia";
import router from "./router";
import config from "./config";
import i18n, { loadLocaleMessages } from "./i18n";
import vuetify from "./plugins/vuetify";
import { installVueQuery } from "./lib/queryClient";
import Vueform from "@vueform/vueform";
import vueformConfig from "./../vueform.config";

import "./assets/styles/main.scss";

// Create app
const app = createApp(App);

// Register global directives
registerDirectives(app);

// Setup Pinia
const pinia = createPinia({
  persist: true,
  devtools: true,
});
app.use(pinia);

// Extract supported locale codes
const supportedLocaleCodes = config.settings.supportedLocales.map(
  (l) => l.code
);
const fallbackLocale = config.settings.defaultLocale;

// Handle locale from route
router.beforeEach(async (to, from, next) => {
  const locale = to.params.locale || fallbackLocale;

  if (!supportedLocaleCodes.includes(locale)) {
    console.log(
      `Unsupported locale: ${locale}. Redirecting to fallback locale: ${fallbackLocale}`
    );
    return next(`/${fallbackLocale}`);
  }

  await loadLocaleMessages(locale);

  if (i18n.global.locale.value !== locale) {
    i18n.global.locale.value = locale;
    localStorage.setItem("locale", locale);
  }

  next();
});

// Use plugins
app.use(router);
app.use(i18n);
installVueQuery(app);
app.use(vuetify);
app.use(Vueform, vueformConfig);

// Global error handler
app.config.errorHandler = (err, instance, info) => {
  console.error("🌐 Global Error Handler:", err, info);

  // Optional: send to monitoring service
  // logErrorToService(err, info);
};

// Mount app
app.mount("#app");
