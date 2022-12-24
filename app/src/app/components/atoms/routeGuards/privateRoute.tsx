import type { FC } from 'react';

import { ROUTE_INDEX_PAGE_URL } from '@/utils/urls';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export const PrivateRoute: FC<RouteProps> = ({
  children,
  ...rest
}) => {
  /** Private route logic */
  const isLoggedIn = true;

  return (
    <Route {...rest}>
      {isLoggedIn ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: ROUTE_INDEX_PAGE_URL,
          }}
        />
      )}
    </Route>
  );
};
