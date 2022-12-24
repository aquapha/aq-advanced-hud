import type { RouteConfig } from '@/routing/routes.types';

import { NullPage } from './nullPage';
import { NullRoute } from '@/atoms/routeGuards';
import { ROUTE_INDEX_PAGE_URL } from '@/utils/urls';

export const NullPageRoute: RouteConfig = {
  path: ROUTE_INDEX_PAGE_URL,
  component: NullPage,
  route: NullRoute,

  exact: true,
};
