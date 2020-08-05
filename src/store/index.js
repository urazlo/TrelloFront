import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);
