import axios from './axios';

const path = 'board';

export const createBoardRequest = (title) => {
  return axios({
    url: `/${path}`,
    method: 'POST',
    data: {
      title,
    },
  });
};

export const getBoardsRequest = () => {
  return axios({
    url: `/${path}`,
    method: 'GET',
  });
};
