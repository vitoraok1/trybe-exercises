import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import catReducer from './reducers/catReducer';

const store = createStore(catReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;