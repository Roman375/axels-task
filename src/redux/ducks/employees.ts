import { call, put, takeLeading } from 'redux-saga/effects'

import { employeeAPI } from '../../api/api'
import {
  StateType,
  setEmployeeActionType,
  getEmployeeActionType,
  fetchEmployeeType,
} from '../../types/employeesType'

const SET_EMPLOYEE = 'SET_EMPLOYEE'
const LOAD_EMPLOYEE = 'LOAD_EMPLOYEE'

export const employee = (
  state: StateType = [],
  action: setEmployeeActionType
): Array<string> => {
  switch (action.type) {
    case SET_EMPLOYEE:
      return [...state, ...action.payload]
    default:
      return state
  }
}

const setEmployee = (payload: Array<string>): setEmployeeActionType => {
  return { type: SET_EMPLOYEE, payload }
}

export const getEmployee = (): getEmployeeActionType => {
  return { type: LOAD_EMPLOYEE }
}

export function* watchedEmployees() {
  yield takeLeading(LOAD_EMPLOYEE, workerloadEmployees)
}

function* workerloadEmployees() {
  const payload: Array<string> = yield call(fetchEmployee)
  yield put(setEmployee(payload))
}

async function fetchEmployee() {
  const response: fetchEmployeeType = await employeeAPI.getEmployees()
  return response.data
}
