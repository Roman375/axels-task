import {call, put, takeLeading} from 'redux-saga/effects'

import { employeeAPI, overviewAPI  } from '../api/api'
import {LOAD_EMPLOYEE, SET_EMPLOYEE, SET_OVERVIEW, LOAD_OVERVIEW} from './types'

// Employees
function* watchedEmployees() {
  yield takeLeading(LOAD_EMPLOYEE, workerloadEmployees)
}

function* workerloadEmployees() {
  const payload = yield call(fetchEmployee)
  yield put({type: SET_EMPLOYEE, payload})
}

async function fetchEmployee() {
  const response = await employeeAPI.getEmployees()
  return response.data
}

// Overviews
function* watchedOverviews() {
  yield takeLeading(LOAD_OVERVIEW, workerloadOverviews)
}

function* workerloadOverviews(employeeName) {
  const payload = yield call(fetchOverview , employeeName)
  yield put({type: SET_OVERVIEW, payload})
}

async function fetchOverview(args) {
  const employeeName = args.employeeName[0]
  const response = await overviewAPI.getOverviews(employeeName)
  return response.data
}

export {
  watchedEmployees,
  watchedOverviews
}