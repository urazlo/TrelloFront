import axios from 'axios';
import { accessToken } from 'utils';
import config from 'config';

axios.defaults.baseURL = config.apiBaseUrl;

axios.interceptors.request.use((request) => {
  request.headers.authorization = `Bearer ${accessToken.get()}`;
  return request;
});

axios.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axios;
