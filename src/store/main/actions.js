import { UPDATE_USER, UPDATE_USER_BOARDS, ADD_USER_BOARD } from './actionNames';

export const updateUser = (data) => ({
  type: UPDATE_USER,
  data,
});

export const updateUserBoards = (data) => ({
  type: UPDATE_USER_BOARDS,
  data,
});

export const addUserBoard = (data) => ({
  type: ADD_USER_BOARD,
  data,
});

