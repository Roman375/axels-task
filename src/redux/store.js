import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import {watchedEmployees, watchedOverviews} from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)) )

sagaMiddleware.run(watchedEmployees)
sagaMiddleware.run(watchedOverviews)

export default store