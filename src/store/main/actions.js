import { UPDATE_USER, UPDATE_USER_BOARDS } from './actionNames';

export const updateUser = (data) => ({
  type: UPDATE_USER,
  data,
});

export const updateUserBoards = (data) => ({
  type: UPDATE_USER_BOARDS,
  data,
});
