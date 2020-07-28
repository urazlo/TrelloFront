import { boardsStorageKey } from './constants';

export const getTaskId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const boardsStorage = {
  get: () => {
    try {
      return JSON.parse(localStorage.getItem(boardsStorageKey)) || [];
    } catch (error) {
      return [];
    }
  },

  set: (board) => {
    localStorage.setItem(boardsStorageKey, JSON.stringify(board));
  },
};
