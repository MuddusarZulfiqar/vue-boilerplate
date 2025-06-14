import { ref } from "vue";

/**
 * Copy text to clipboard with success indicator.
 *
 * @returns {{
 *   copied: import('vue').Ref<boolean>,
 *   copy: (text: string) => Promise<void>
 * }}
 *
 * @example
 * const { copy, copied } = useClipboard()
 * copy("Hello world")
 */
export function useClipboard() {
  const copied = ref(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      copied.value = true;
      setTimeout(() => (copied.value = false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return { copied, copy };
}
