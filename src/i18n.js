import { createI18n } from "vue-i18n";
import config from "./config";

const i18n = createI18n({
  legacy: false,
  locale: config.settings.defaultLocale,
  fallbackLocale: config.settings.defaultLocale,
  messages: {}, // Start with empty, load on demand
});

export default i18n;

/**
 * Load locale messages dynamically
 * @param {string} locale - Language code like 'en', 'fr'
 */
export async function loadLocaleMessages(locale) {
  if (!i18n.global.availableLocales.includes(locale)) {
    try {
      console.log(`Loading locale: ${locale}`);
      const messages = await import(`./locales/${locale}.json`);
      i18n.global.setLocaleMessage(locale, messages.default);
    } catch (err) {
      console.warn(`Failed to load locale: ${locale}`, err);
    }
  }

  i18n.global.locale.value = locale;
}
