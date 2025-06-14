import { queryClient } from "@/lib/queryClient";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || null,
    role: localStorage.getItem("role") || "guest",
    user: null, // optional for current user details
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    userRole: (state) => state.role,
  },
  actions: {
    setSession(token, role = null) {
      this.token = token;
      this.role = role;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
    },
    async clearSession() {
      this.token = null;
      this.role = null;
      this.user = null;

      queryClient.clear(); // Clear query cache
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },
    setUser(user) {
      this.user = user;
      this.setSession(this.token, this.role); // Ensure session is updated
    },
  },
});
