import {
  UPDATE_USER,
  UPDATE_BOARDS,
  ADD_BOARD,
  ADD_COLUMN,
  UPDATE_COLUMNS,
  EDIT_COLUMN,
} from './actionNames';

export const updateUser = (data) => ({
  type: UPDATE_USER,
  data,
});

export const updateBoards = (data) => ({
  type: UPDATE_BOARDS,
  data,
});

export const addBoard = (data) => ({
  type: ADD_BOARD,
  data,
});

export const updateColumns = (data) => ({
  type: UPDATE_COLUMNS,
  data,
});

export const addColumn = (data) => ({
  type: ADD_COLUMN,
  data,
});

export const editColumn = (data) => ({
  type: EDIT_COLUMN,
  data,
});
