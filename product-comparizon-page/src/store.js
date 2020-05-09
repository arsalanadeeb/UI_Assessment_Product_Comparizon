import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import RootSaga from './rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware) ), )
  sagaMiddleware.run(RootSaga)
  return store
}