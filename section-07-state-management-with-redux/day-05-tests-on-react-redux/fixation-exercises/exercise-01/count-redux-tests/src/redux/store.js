import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import counterReducer from './reducers/counterReducer';

const store = createStore(
  combineReducers({ counterReducer }),
  composeWithDevTools()
);

export default store;
