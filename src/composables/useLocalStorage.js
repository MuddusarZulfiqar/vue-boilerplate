import { ref, watch } from "vue";

/**
 * Reactive localStorage state binding.
 *
 * @param {string} key - The localStorage key.
 * @param {*} defaultValue - Fallback value if nothing is found in localStorage.
 * @returns {import('vue').Ref<any>}
 *
 * @example
 * const name = useLocalStorage('name', 'Guest')
 * name.value = 'John' // Updates localStorage
 */
export function useLocalStorage(key, defaultValue) {
  const stored = localStorage.getItem(key);
  const data = ref(stored ? JSON.parse(stored) : defaultValue);

  watch(
    data,
    (newVal) => {
      localStorage.setItem(key, JSON.stringify(newVal));
    },
    { deep: true }
  );

  return data;
}
