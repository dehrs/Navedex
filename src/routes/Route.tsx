import React from 'react';
import {
  RouteProps as ReactRouterProps,
  Route as ReactRoute,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/Auth';

interface RouteProps extends ReactRouterProps {
  routePrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  routePrivate = false,
  component: Component,
  ...rest
}: RouteProps) => {
  const { id } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={() => {
        return routePrivate === !!id ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: routePrivate ? '/' : '/home' }} />
        );
      }}
    />
  );
};

export default Route;
