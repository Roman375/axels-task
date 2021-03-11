import { call, put, takeLeading } from 'redux-saga/effects'

import { overviewAPI } from '../../api/api'
import {
  StateType,
  setOverviewActionType,
  getOverviewsActionType,
} from '../../types/overviewsType'

export const SET_OVERVIEW = 'SET_OVERVIEW'
export const LOAD_OVERVIEW = 'LOAD_OVERVIEW'

export const initialState = []

export const overview = (
  state: StateType = initialState,
  action: setOverviewActionType
): StateType => {
  switch (action.type) {
    case SET_OVERVIEW:
      return [...action.payload]
    default:
      return state
  }
}

export const setOverview = (payload: StateType): setOverviewActionType => {
  return { type: SET_OVERVIEW, payload }
}

export const getOverviews = (employeeName: string): getOverviewsActionType => {
  return { type: LOAD_OVERVIEW, employeeName }
}

export function* watchedOverviews() {
  yield takeLeading(LOAD_OVERVIEW, workerloadOverviews)
}

function* workerloadOverviews(employeeName: getOverviewsActionType) {
  const payload: StateType = yield call(fetchOverview, employeeName)
  yield put(setOverview(payload))
}

async function fetchOverview(args: getOverviewsActionType) {
  const employeeName: string = args.employeeName
  const response = await overviewAPI.getOverviews(employeeName)
  return response.data
}
