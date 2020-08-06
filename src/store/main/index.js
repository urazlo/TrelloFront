import { UPDATE_USER, LOGOUT_USER } from './actionNames';

const getInitialStore = () => ({
  user: null,
  kek: 'asd',
});

export default (
  store = getInitialStore(),
  { type, data },
) => {
  switch (type) {
    case UPDATE_USER:
      return {
        ...store,
        user: data,
      };
    case LOGOUT_USER:
      return {
        ...store,
        user: null,
      };
    default:
      return store;
  }
};
