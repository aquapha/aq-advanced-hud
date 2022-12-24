import type { FC } from 'react';

import { ROUTE_PRIVATE_ROUTE_URL } from '@/utils/urls';
import { Route, RouteProps, Redirect } from 'react-router-dom';

export const PublicRoute: FC<RouteProps> = ({
  children,
  ...rest
}) => {
  /** Public route logic */
  const isLoggedIn = false;

  return (
    <Route {...rest}>
      {isLoggedIn ? (
        <Redirect
          to={{
            pathname: ROUTE_PRIVATE_ROUTE_URL,
          }}
        />
      ) : (
        children
      )}
    </Route>
  );
};
