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
  DRAG_HAPPENED,
} from './actionNames';

export const updateUserAction = (data) => ({
  type: UPDATE_USER,
  data,
});

export const updateBoardsAction = (data) => ({
  type: UPDATE_BOARDS,
  data,
});

export const addBoardAction = (data) => ({
  type: ADD_BOARD,
  data,
});

export const updateColumnsAction = (data) => ({
  type: UPDATE_COLUMNS,
  data,
});

export const addColumnAction = (data) => ({
  type: ADD_COLUMN,
  data,
});

export const editColumnAction = (data) => ({
  type: EDIT_COLUMN,
  data,
});

export const updateCardsAction = (data) => ({
  type: UPDATE_CARDS,
  data,
});

export const addCardAction = (data) => ({
  type: ADD_CARD,
  data,
});

export const editCardAction = (data) => ({
  type: EDIT_CARD,
  data,
});

export const sortAction = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type,
) => ({
  type: DRAG_HAPPENED,
  data: {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexEnd,
    droppableIndexStart,
    draggableId,
    type,
  },
});
