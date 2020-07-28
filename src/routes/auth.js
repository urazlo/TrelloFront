import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
// import Board from 'pages/Board';
import BoardersList from 'pages/BoardersList';
import RestorePass from 'pages/RestorePass';

export default [
  {
    path: '/boarders-list',
    component: BoardersList,
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
