import type { RouteRendererProps } from '@/organisms/routeRenderer/routeRenderer.types';

import { AppRoutes } from './routes/routes';
import { Redirect } from 'react-router-dom';
import { ROUTE_INDEX_PAGE_URL } from '@/utils/urls';
import { RouteRenderer } from '@/organisms/routeRenderer';
import { RouterWrapper } from './routes/components/routerWrapper';

export const Routes = ({
  isTopLevel,
}: RouteRendererProps) => (
  <RouterWrapper>
    <RouteRenderer isTopLevel={isTopLevel} routes={AppRoutes}>
      <Redirect to={ROUTE_INDEX_PAGE_URL} />
    </RouteRenderer>
  </RouterWrapper>
);
