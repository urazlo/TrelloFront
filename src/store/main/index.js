import {
  UPDATE_USER,
  UPDATE_BOARDS,
  ADD_BOARD,
  ADD_COLUMN,
  UPDATE_COLUMNS,
  EDIT_COLUMN,
  UPDATE_CARDS,
  ADD_CARD,
  EDIT_CARD,
} from './actionNames';

const getInitialStore = () => ({
  user: null,
  boards: null,
  columns: null,
  cards: [],
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
        columns: store.columns.map(column => {
          if (column.id === data.id) {
            return { ...column, title: data.title };
          }

          return column;
        }),
      };
    case UPDATE_CARDS:
      return {
        ...store,
        cards: data,
      };
    // return {
    //   ...store,
    //   cards: store.cards.concat(data),
    // };
    case ADD_CARD:
      return {
        ...store,
        cards: [...store.cards, data],
      };
    case EDIT_CARD:
      return {
        ...store,
        cards: store.cards.map(card => {
          if (card.id === data.id) {
            return { ...card, title: data.title };
          }

          return card;
        }),
      };
    default:
      return store;
  }
};
