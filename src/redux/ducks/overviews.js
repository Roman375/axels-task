import {call, put, takeLeading} from 'redux-saga/effects'

import { overviewAPI  } from '../../api/api'

const SET_OVERVIEW = 'SET_OVERVIEW'
const LOAD_OVERVIEW = 'LOAD_OVERVIEW'

export const overview = (state = [], action) => {
  switch (action.type) {
    case SET_OVERVIEW:
      return [...action.payload]
      default:
        return state
  }
}

const setOverview = (payload) => {
  return { type: SET_OVERVIEW, payload }
}

export const getOverviews = (employeeName) => {
  return { type: LOAD_OVERVIEW, employeeName }
}

export function* watchedOverviews() {
  yield takeLeading(LOAD_OVERVIEW, workerloadOverviews)
}

function* workerloadOverviews(employeeName) {
  const payload = yield call(fetchOverview , employeeName)
  yield put(setOverview(payload))
}

async function fetchOverview(args) {
  const employeeName = args.employeeName[0]
  const response = await overviewAPI.getOverviews(employeeName)
  return response.data
}
