import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

import INITIAL_STATE_STORE from '../constants/store';

const store = createStore(
  reducer,
  INITIAL_STATE_STORE,
  compose(applyMiddleware(thunk))
);

export default store;
