/**
 * Represents a route path in the application
 */
export type RoutePath = string;

/**
 * Configuration for application routes
 */
export type RouteConfig = {
  /** Routes that are accessible without authentication */
  publicRoutes: RoutePath[];
  /** Routes that require authentication */
  protectedRoutes: RoutePath[];
};
