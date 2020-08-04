import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { reducer } from "./dogs/Reducers";
import { watcherSaga } from "./dogs/Saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools, applyMiddleware(logger))
);

// run the saga
sagaMiddleware.run(watcherSaga);

export default store;
