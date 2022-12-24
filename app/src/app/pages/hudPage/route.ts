import type { RouteConfig } from '@/routing/routes.types';

import { HudPage } from './hudPage';
import { PublicRoute } from '@/atoms/routeGuards';
import { ROUTE_INDEX_PAGE_URL } from '@/utils/urls';

export const HudPageRoute: RouteConfig = {
  path: ROUTE_INDEX_PAGE_URL,
  component: HudPage,
  route: PublicRoute,
};
