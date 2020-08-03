import { UPDATE_USER } from './actionNames';

const getInitialStore = () => ({
  user: null,
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

    default:
      return store;
  }
};
