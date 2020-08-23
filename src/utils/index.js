import { accessTokenKey } from 'config';

export const accessToken = {
  get: () => {
    try {
      return JSON.parse(localStorage.getItem(accessTokenKey));
    } catch (error) {
      return null;
    }
  },

  set: (token) => {
    localStorage.setItem(accessTokenKey, JSON.stringify(token));
  },
};
