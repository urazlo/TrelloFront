import { UPDATE_USER, LOGOUT_USER } from './actionNames';

export const updateUser = (data) => ({
  type: UPDATE_USER,
  data,
});

export const logoutUser = (data) => ({
  type: LOGOUT_USER,
  data,
});
