import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import RestorePass from 'pages/RestorePass';

export default [
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
