import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Board from 'pages/Board';
import UserBoards from 'pages/UserBoards';
import RestorePass from 'pages/RestorePass';
import App from 'App';
// import { boardLink } from "ui/components/BoardPreview";

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
  {
    path: '/start',
    component: App,
    exact: true,
  },
  {
    path: '/',
    component: UserBoards,
    exact: true,
  },
  {
    path: '/b/2youh9j2m',
    component: Board,
    exact: true,
  },
  {
    path: '/b/c3k8n713d',
    component: Board,
    exact: true,
  },
];
