import { createStore, applyMiddleware } from 'redux';
import counterReducer, { createInitialState } from './modules/counter';
import thunk from 'redux-thunk';

const store = createStore(counterReducer, createInitialState(), applyMiddleware(thunk));

export default store;
