import { combineReducers } from "redux";
import * as types from "./types";

const employee = (state = [], action) => {
  switch (action.type) {
    case types.SET_EMPLOYEE: 
      return [...state, ...action.payload]
    default:
      return state
  }
}

const overview = (state = [], action) => {
  switch (action.type) {
    case types.SET_OVERVIEW:
      return [...action.payload]
      default:
        return state
  }
}

const reducer = combineReducers({
  employees: employee,
  overviews: overview
})

export default reducer