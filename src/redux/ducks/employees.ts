import { call, put, takeLeading } from 'redux-saga/effects'

import { employeeAPI } from '../../api/api'
import {
  StateType,
  setEmployeeActionType,
  getEmployeeActionType,
  fetchEmployeeType,
} from '../../types/employeesType'

export const SET_EMPLOYEE = 'SET_EMPLOYEE'
export const LOAD_EMPLOYEE = 'LOAD_EMPLOYEE'

export const initialState = {
  employees:[]
}

export const employee = (
  state: StateType = initialState,
  action: setEmployeeActionType
): StateType => {
  switch (action.type) {
    case SET_EMPLOYEE:
      return {...state, employees: [...action.payload]}
    default:
      return state
  }
}

export const setEmployee = (payload: Array<string>): setEmployeeActionType => {
  return { type: SET_EMPLOYEE, payload }
}

export const getEmployee = (): getEmployeeActionType => {
  return { type: LOAD_EMPLOYEE }
}

export function* watchedEmployees() {
  yield takeLeading(LOAD_EMPLOYEE, workerloadEmployees)
}

export function* workerloadEmployees() {
  const payload: Array<string> = yield call(fetchEmployee)
  yield put(setEmployee(payload))
}

export async function fetchEmployee() {
  const response: fetchEmployeeType = await employeeAPI.getEmployees()
  return response.data
}
