import type { RouteConfig } from '@/routing/routes.types';

export interface RouteRendererProps {
  routes?: RouteConfig[];
  pathnameIndex?: number;
  isTopLevel?: boolean;
}
