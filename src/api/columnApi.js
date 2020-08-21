import axios from './axios';

const path = 'column';

export const createColumn = ({ title, boardId }) => {
  return axios({
    url: `/${path}`,
    method: 'POST',
    data: {
      title,
      boardId,
    },
  });
};

export const getColumns = (boardId) => {
  return axios({
    url: `/${path}/${boardId}`,
    method: 'GET',
  });
};

export const editColumnTitle = (boardId) => {
  return axios({
    url: `/${path}/${boardId}`,
    method: 'GET',
  });
};
