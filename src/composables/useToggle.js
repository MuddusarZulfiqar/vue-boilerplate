import { ref } from "vue";

/**
 * Toggle a boolean value (true/false).
 *
 * @param {boolean} [initialValue=false] - The initial value of the toggle.
 * @returns {{
 *   state: import('vue').Ref<boolean>,
 *   toggle: () => void,
 *   setTrue: () => void,
 *   setFalse: () => void
 * }}
 *
 * @example
 * const { state, toggle } = useToggle()
 * toggle() // state.value toggles between true/false
 */
export function useToggle(initialValue = false) {
  const state = ref(initialValue);

  const toggle = () => (state.value = !state.value);
  const setTrue = () => (state.value = true);
  const setFalse = () => (state.value = false);

  return {
    state,
    toggle,
    setTrue,
    setFalse,
  };
}
