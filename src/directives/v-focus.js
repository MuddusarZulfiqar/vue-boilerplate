/**
 * v-focus directive
 * Automatically focuses the element when mounted
 *
 * @example
 * <input v-focus />
 */
export default {
  mounted(el) {
    el.focus();
  },
};
