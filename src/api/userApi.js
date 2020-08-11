import axios from './axios';

const path = 'user';

export const editUser = ({ login, email, id, password, newPassword }) => {
  return axios({
    url: `/${path}/${id}`,
    method: 'PATCH',
    data: {
      login,
      email,
      password,
      newPassword,
    },
  });
};

export const uploadUserAvatar = (avatar) => {
  const data = new FormData();
  data.append('avatar', avatar);
  return axios({
    url: `/${path}/update-avatar`,
    method: 'PATCH',
    headers: {
      'content-type': 'multipart/form-data',
    },
    data,
  });
};
