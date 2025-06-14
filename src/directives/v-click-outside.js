/**
 * v-click-outside directive
 * Detects clicks outside the bound element and triggers a callback
 *
 * @example
 * <div v-click-outside="onOutsideClick">...</div>
 */
export default {
  mounted(el, binding) {
    el.__clickOutsideHandler__ = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.addEventListener("click", el.__clickOutsideHandler__);
  },
  unmounted(el) {
    document.removeEventListener("click", el.__clickOutsideHandler__);
    delete el.__clickOutsideHandler__;
  },
};
