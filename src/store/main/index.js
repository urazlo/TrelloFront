import { UPDATE_USER, UPDATE_USER_BOARDS } from './actionNames';

const getInitialStore = () => ({
  user: null,
  boards: null,
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
    case UPDATE_USER_BOARDS:
      return {
        ...store,
        boards: data,
      };
    default:
      return store;
  }
};
