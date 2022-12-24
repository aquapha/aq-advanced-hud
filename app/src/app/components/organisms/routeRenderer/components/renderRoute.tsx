import type { RouteConfig } from '@/routing/routes.types';

import { Suspense } from 'react';

export const RenderRoute = ({
  ...props
}: RouteConfig) => {
  const {
    component: Component,
    suspense,
    routes,
    ...route
  } = props;

  return (
    <route.route {...route}>
      <Suspense fallback={suspense ?? <></>}>
        <Component />
      </Suspense>
    </route.route>
  );
};
