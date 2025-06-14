// lib/queryClient.js

import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";

/**
 * The main QueryClient instance used across the application.
 *
 * @constant {QueryClient}
 * @description Configured with default options to optimize UX and performance:
 * - Disables refetching on window focus
 * - Disables automatic retries
 * - Sets stale time to 5 minutes for queries
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
    mutations: {
      retry: false,
    },
  },
});

/**
 * Installs the Vue Query plugin into a Vue app instance.
 *
 * @function
 * @param {import('vue').App} app - The Vue application instance.
 * @description This function registers the VueQueryPlugin with the pre-configured queryClient.
 */
export function installVueQuery(app) {
  app.use(VueQueryPlugin, { queryClient });
}
