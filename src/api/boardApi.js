import axios from './axios';

const path = 'board';

export const getUserBoards = () => {
  return axios({
    url: `/${path}`,
    method: 'GET',
  });
};

export const createBoard = (title) => {
  return axios({
    url: `/${path}`,
    method: 'POST',
    data: {
      title,
    },
  });
};
