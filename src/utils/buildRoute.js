/**
 * Builds a static route without modifying it.
 *
 * This overload is useful when calling `buildRoute()` with a known static route
 * (e.g., `'/auth/login'`), so the return type preserves the exact string literal.
 *
 * @param {string} route - The static route string to return as-is.
 * @returns {string} The same static route.
 */
function buildRoute(route) {
  if (arguments.length === 1) return route;

  const params = arguments[1];
  return Object.entries(params).reduce((path, [key, value]) => {
    return path.replace(`:${key}`, encodeURIComponent(String(value)));
  }, route);
}

export { buildRoute };
