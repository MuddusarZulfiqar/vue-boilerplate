import { QueryClient, useQuery, useQueryClient } from "@tanstack/vue-query";
import { useAuthStore } from "@/store/auth";
import { authService } from "../services/auth.service";
import { watch } from "vue";

/**
 * Fetch current user from API
 */
export function useCurrentUserQuery() {
  const authStore = useAuthStore();
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => authService().me(),
    enabled: !!authStore.token,
  });

  watch(
    () => query.data.value,
    async (data) => {
      if (data) {
        await queryClient.invalidateQueries(["currentUser"]);
        authStore.setUser(data);
      }
    },
    { immediate: true }
  );

  return query;
}
