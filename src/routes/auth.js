import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
// import Board from 'pages/Board';
import App from 'App';

import Home from 'pages/Home';
import RestorePass from 'pages/RestorePass';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/start',
    component: App,
    exact: true,
  },
  // {
  //   path: '/board',
  //   component: Board,
  //   exact: true,
  // },
  {
    path: '/auth/sign-in',
    component: SignIn,
    exact: true,
  },
  {
    path: '/auth/sign-up',
    component: SignUp,
    exact: true,
  },
  {
    path: '/restore-pass',
    component: RestorePass,
    exact: true,
  },
];
