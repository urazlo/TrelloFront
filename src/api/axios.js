import axios from 'axios';
import { accessToken } from 'utils';
import config from 'config';

axios.defaults.baseURL = config.apiBaseUrl;

axios.interceptors.request.use((req) => {
  req.headers.authorization = `Bearer ${accessToken.get()}`;
  return req;
});

axios.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default axios;
