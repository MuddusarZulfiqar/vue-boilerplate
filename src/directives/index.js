import vClickOutside from "./v-click-outside";
import vFocus from "./v-focus";

/**
 * Register custom directives globally
 * Call this in your main.js
 */
export function registerDirectives(app) {
  app.directive("click-outside", vClickOutside);
  app.directive("focus", vFocus);
}
