import type { FC } from 'react';

import { Route, RouteProps } from 'react-router-dom';

export const NullRoute: FC<RouteProps> = ({
  children,
  ...rest
}) => (
  <Route {...rest}>
    {children}
  </Route>
);
