import React from 'react';

import { Switch, Route } from 'react-router-dom';

import auth from './auth';

const Router = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          {...route}
        />
      ))}
    </Switch>
  );
};

const routes = [
  ...auth,
  {
    path: '/',
    component: () => '404',
    exact: false,
  },
];

export default Router;
