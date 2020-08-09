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
