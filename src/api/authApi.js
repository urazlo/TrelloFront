/* eslint-disable no-console */
import axios from 'axios';
import config from '../config';

export const signUp = ({ login, email, password }) => {
  return axios({
    url: `${config.apiBaseUrl}/auth/sign-up`,
    method: 'POST',
    params: {},
    headers: {},
    data: {
      login: `${login}`,
      email: `${email}`,
      password: `${password}`,
    },
  }).then(res => {
    console.log(res);
    console.log('successful signup');
  }).catch(err => {
    console.log('signup error: ');
    console.log(err);
  });
};

export const signIn = ({ email, password }) => {
  return axios({
    url: `${config.apiBaseUrl}/auth/sign-in`,
    method: 'POST',
    params: {},
    headers: {},
    data: {
      email: `${email}`,
      password: `${password}`,
    },
  }).then(res => {
    console.log(res);
    console.log('successful signIn');
  }).catch(err => {
    console.log('signIn error: ');
    console.log(err);
  });
};
