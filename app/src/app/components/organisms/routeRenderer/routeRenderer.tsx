import type { PropsWithChildren } from 'react';
import type { RouteRendererProps } from './routeRenderer.types';

import { RenderRoute } from './components';
import { RegisterNUICalls } from '@/config/NUI';
import { AnimatedRoute } from '@/atoms/animatedRoute';
import { Switch, useLocation } from 'react-router-dom';

export const RouteRenderer = ({
  ...props
}: PropsWithChildren<RouteRendererProps>) => {
  const {
    pathnameIndex,
    isTopLevel,
    children,
    routes,
  } = props;

  const location = useLocation();

  if (!routes?.length) return null;

  if (isTopLevel) {
    RegisterNUICalls();
  }

  const pathKey = location.pathname.split('/')[pathnameIndex ?? 1];

  return (
    <AnimatedRoute
      routeKey={pathKey}
      display="flex"
      w="100%"
      h="100%"
    >
      <Switch location={location}>
        {routes.map((route, idx) => (
          <RenderRoute {...route} key={idx.toString()} />
        ))}
        {children}
      </Switch>
    </AnimatedRoute>
  );
};
