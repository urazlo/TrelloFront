import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import UserBoard from 'pages/UserBoard';
import UserBoards from 'pages/UserBoards';
import RestorePass from 'pages/RestorePass';
import App from 'App';

export default [
  {
    path: '/',
    component: UserBoards,
    exact: true,
  },
  {
    path: '/start',
    component: App,
    exact: true,
  },
  {
    path: '/b/mhnfe3jyb',
    component: UserBoard,
    exact: true,
  },
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
