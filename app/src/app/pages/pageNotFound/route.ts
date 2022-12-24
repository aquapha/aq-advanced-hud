import type { RouteConfig } from '@/routing/routes.types';

import { NullPage } from '../main/nullPage';
import { NotFoundRoute } from '@/atoms/routeGuards';

export const PageNotFoundRoute: RouteConfig = {
  route: NotFoundRoute,
  component: NullPage,
  path: '*',
};
