import { accessTokenKey } from 'config';
import { cardsStorageKey } from './constants';

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
