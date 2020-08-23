import axios from './axios';

const path = 'column';

export const createColumnRequest = ({ title, boardId }) => {
  return axios({
    url: `/${path}`,
    method: 'POST',
    data: {
      title,
      boardId,
    },
  });
};

export const getColumnsRequest = (boardId) => {
  return axios({
    url: `/${path}/${boardId}`,
    method: 'GET',
  });
};

export const editColumnRequest = ({ userId, title, columnId }) => {
  return axios({
    url: `/${path}/${userId}`,
    method: 'PATCH',
    data: {
      title,
      columnId,
    },
  });
};
