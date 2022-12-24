import type { FC, PropsWithChildren } from 'react';
import type { Route, RouteProps } from 'react-router-dom';

export interface RouteConfig extends RouteProps {
  route: typeof Route | FC;
  routes?: RouteConfig[];
  suspense?: JSX.Element;
  component: React.FC;
}

export type RoutesWrapperProps = {
  isTopLevel: boolean;
} & PropsWithChildren;
