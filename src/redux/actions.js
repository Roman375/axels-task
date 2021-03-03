import * as types from "./types";

// Employees
const setEmployee = (payload) => {
  return { type: types.SET_EMPLOYEE, payload }
}

const getEmployee = () => {
  return { type: types.LOAD_EMPLOYEE }
}

// Overviews
const setOverview = (payload) => {
  return { type: types.SET_OVERVIEW, payload }
}

const getOverviews = (employeeName) => {
  return { type: types.LOAD_OVERVIEW, employeeName }
}

export {
  setEmployee,
  getEmployee,
  setOverview,
  getOverviews,
};