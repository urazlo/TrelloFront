/* eslint-disable no-console */
// import config from 'config';
import axios from './axios';

const path = 'auth';

export const signUp = ({ login, email, password }) => {
  return axios({
    url: `/${path}/sign-up`,
    method: 'POST',
    data: {
      login,
      email,
      password,
    },
  });
};

export const signIn = ({ userName, password }) => {
  return axios({
    url: `/${path}/sign-in`,
    method: 'POST',
    data: {
      userName,
      password,
    },
  });
};

export const check = () => {
  return axios.get(`/${path}/check`);
};
