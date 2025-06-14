import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

/**
 * Vuetify instance
 *
 * This configured Vuetify instance includes:
 * - Dark and light themes with custom primary and secondary colors
 * - Default theme set to "dark"
 * - Material Design Icons (mdi) integration
 *
 * Use this instance to enable Vuetify globally in your app.
 *
 * @type {ReturnType<typeof createVuetify>}
 */

const vuetify = createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        colors: {
          primary: "#1976D2",
          secondary: "#424242",
        },
      },
      dark: {
        colors: {
          primary: "#2196F3",
          secondary: "#424242",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
});

export default vuetify;
