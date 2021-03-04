import {call, put, takeLeading} from 'redux-saga/effects'

import { employeeAPI } from '../../api/api'

const SET_EMPLOYEE = 'SET_EMPLOYEE'
const LOAD_EMPLOYEE = 'LOAD_EMPLOYEE'

export const employee = (state = [], action) => {
  switch (action.type) {
    case SET_EMPLOYEE: 
      return [...state, ...action.payload]
    default:
      return state
  }
}

const setEmployee = (payload) => {
  return { type: SET_EMPLOYEE, payload }
}

export const getEmployee = () => {
  return { type: LOAD_EMPLOYEE }
}

export function* watchedEmployees() {
  yield takeLeading(LOAD_EMPLOYEE, workerloadEmployees)
}

function* workerloadEmployees() {
  const payload = yield call(fetchEmployee)
  yield put(setEmployee(payload))
}

async function fetchEmployee() {
  const response = await employeeAPI.getEmployees()
  return response.data
}
