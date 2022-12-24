import type { FC } from 'react';

import { ROUTE_INDEX_PAGE_URL } from '@/utils/urls';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export const NotFoundRoute: FC<RouteProps> = ({
  ...rest
}) => (
  <Route {...rest}>
    <Redirect to={ROUTE_INDEX_PAGE_URL} />
  </Route>
);
