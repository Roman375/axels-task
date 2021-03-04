import { applyMiddleware, compose, createStore , combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'

import { watchedOverviews, overview } from './ducks/overviews'
import { watchedEmployees, employee } from './ducks/employees'

const reducer = combineReducers({
  employees: employee,
  overviews: overview
})

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)) )

sagaMiddleware.run(watchedEmployees)
sagaMiddleware.run(watchedOverviews)

export default store
