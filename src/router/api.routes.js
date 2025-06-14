// src/router/apiRoutes.js

/**
 * API route paths used throughout the application.
 * Dynamic segments (e.g., `:id`, `:userId`) should be replaced using a helper like `buildRoute()`.
 */
export const apiRoutes = {
  auth: {
    login: "/auth/login",
    me: "/auth/me",
    refresh: "/auth/refresh",
  },
  users: {
    all: "/users",
    me: "/users/me",
    detail: "/users/:id",
    orders: "/users/:userId/orders/:orderId",
  },
};
