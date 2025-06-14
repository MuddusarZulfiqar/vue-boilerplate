import request from "@/api/request";
import { apiRoutes } from "@/router/api.routes";
import { buildRoute } from "@/utils";
export function authService() {
  return {
    login: async (credentials) => {
      try {
        const response = await request.post(
          buildRoute(apiRoutes.auth.login),
          credentials
        );
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Login failed");
      }
    },

    me: async () => {
      try {
        const response = await request.get(buildRoute(apiRoutes.auth.me));
        return response.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch user details"
        );
      }
    },

    refresh: async () => {
      try {
        const response = await apiClient.post("/auth/refresh");
        return response.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Token refresh failed"
        );
      }
    },
  };
}
