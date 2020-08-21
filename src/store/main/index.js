import {
  UPDATE_USER,
  UPDATE_BOARDS,
  UPDATE_COLUMNS,
  ADD_BOARD,
  ADD_COLUMN,
  EDIT_COLUMN,
} from './actionNames';

const getInitialStore = () => ({
  user: null,
  boards: null,
  columns: null,
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
    case UPDATE_BOARDS:
      return {
        ...store,
        boards: data,
      };
    case ADD_BOARD:
      return {
        ...store,
        boards: [...store.boards, data],
      };
    case UPDATE_COLUMNS:
      return {
        ...store,
        columns: data,
      };
    case ADD_COLUMN:
      return {
        ...store,
        columns: [...store.columns, data],
      };
    case EDIT_COLUMN:
      return {
        ...store,
        columns: [...store.columns, data],
      };

    default:
      return store;
  }
};
