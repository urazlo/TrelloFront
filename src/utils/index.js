import { boardsStorageKey, columnsStorageKey, cardsStorageKey } from './constants';

export const getBoardId = () => {
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

export const getColumnId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const columnsStorage = {
  get: () => {
    try {
      return JSON.parse(localStorage.getItem(columnsStorageKey)) || [];
    } catch (error) {
      return [];
    }
  },

  set: (column) => {
    localStorage.setItem(columnsStorageKey, JSON.stringify(column));
  },
};

export const getCardId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const cardsStorage = {
  get: () => {
    try {
      return JSON.parse(localStorage.getItem(cardsStorageKey)) || [];
    } catch (error) {
      return [];
    }
  },

  set: (card) => {
    localStorage.setItem(cardsStorageKey, JSON.stringify(card));
  },
};
