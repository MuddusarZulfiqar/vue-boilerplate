import { useMutation } from "@tanstack/vue-query";
import { useAuthStore } from "@/store/auth";
import { authService } from "../services/auth.service";
import { useRouter } from "vue-router";

/**
 * Login mutation using vue-query
 * @returns { useLogin: Function, isPending, error, data }
 */
export function useLoginMutation() {
  const authStore = useAuthStore();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: ({ username, password }) =>
      authService().login({ username, password }),
    onSuccess: (data) => {
      console.log("Login successful:", data);
      let role = (data.lastName = "Sanchez" ? "user" : "admin"); // Example role assignment based on username
      authStore.setSession(data.accessToken, role || "user");
      authStore.setUser(data); // optional
      router.push({
        name: "home", // or any other route you want to redirect to after login,
        replace: true, // replace current history entry
      });
    },
  });

  return {
    login: mutation.mutate,
    ...mutation,
  };
}
