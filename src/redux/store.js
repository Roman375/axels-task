import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import employees from './employeeReducer'
import overviews from './overviewReducer'


const rootReducer = combineReducers({
  employees,
  overviews
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)) )
window.store= store
export default store