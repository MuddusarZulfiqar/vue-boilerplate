import { ref, onMounted, onUnmounted } from "vue";

/**
 * Track window size reactively.
 *
 * @returns {{
 *   width: import('vue').Ref<number>,
 *   height: import('vue').Ref<number>
 * }}
 *
 * @example
 * const { width, height } = useWindowSize()
 */
export function useWindowSize() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const update = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => window.addEventListener("resize", update));
  onUnmounted(() => window.removeEventListener("resize", update));

  return { width, height };
}
