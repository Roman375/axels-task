import {SET_EMPLOYEE, LOAD_EMPLOYEE, SET_OVERVIEW ,LOAD_OVERVIEW} from './types'

// Employees
export const setEmployee = (payload) => {
  return { type: SET_EMPLOYEE, payload }
}

export const getEmployee = () => {
  return { type: LOAD_EMPLOYEE }
}

// Overviews
export const setOverview = (payload) => {
  return { type: SET_OVERVIEW, payload }
}

export const getOverviews = (employeeName) => {
  return { type: LOAD_OVERVIEW, employeeName }
}
