import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import RestorePass from 'pages/RestorePass';

export default [
  {
    path: '/sign-in',
    component: SignIn,
    exact: true
  },
  {
    path: '/sign-up',
    component: SignUp,
    exact: true
  },
  {
    path: '/restore-pass',
    component: RestorePass,
    exact: true
  }
];
