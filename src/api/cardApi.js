import axios from './axios';

const path = 'card';

export const createCardRequest = ({ cardInputValue, columnId }) => {
  return axios({
    url: `/${path}`,
    method: 'POST',
    data: {
      cardInputValue,
      columnId,
    },
  });
};

export const getCardsRequest = () => {
  return axios({
    url: `/${path}`,
    method: 'GET',
  });
};

export const editCardRequest = ({ userId, title, cardId }) => {
  return axios({
    url: `/${path}/${userId}`,
    method: 'PATCH',
    data: {
      title,
      cardId,
    },
  });
};
