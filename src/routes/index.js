import React from 'react';
import { connect } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import Board from 'pages/Board';
import UserBoards from 'pages/UserBoards';

import auth from './auth';

const Router = (props) => {
  let array = routes;

  if (!props.user) { array = auth; }

  return (
    <Switch>
      {array.map((route) => (
        <Route
          key={route.path}
          {...route}
        />
      ))}

      <Route
        path="/"
        component={() => 404}
      />
    </Switch>
  );
};

const routes = [
  {
    path: '/',
    component: UserBoards,
    exact: true,
  },
  {
    path: '/board/sjj3owq2p',
    component: Board,
    exact: true,
  },
];

const connectFunction = connect(
  ({ main }) => ({
    user: main.user,
  }),
);

export default connectFunction(Router);
