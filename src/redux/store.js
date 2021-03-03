import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'

import employees from './employeeReducer'
import overviews from './overviewReducer'
import {watchedEmployees, watchedOverviews} from './sagas'

const rootReducer = combineReducers({
  employees,
  overviews
})

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)) )

sagaMiddleware.run(watchedEmployees)
sagaMiddleware.run(watchedOverviews)

export default store