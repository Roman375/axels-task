import {call, put, takeLeading} from 'redux-saga/effects'

import { overviewAPI } from '../../api/api'
import { StateType, setOverviewActionType, getOverviewsActionType } from '../../types/overviewsType'

const SET_OVERVIEW = 'SET_OVERVIEW'
const LOAD_OVERVIEW = 'LOAD_OVERVIEW'

export const overview = (state: StateType = [], action: setOverviewActionType): Array<object> => {
  switch (action.type) {
    case SET_OVERVIEW:
      return [...action.payload]
      default:
        return state
  }
}

const setOverview = (payload: Array<object>): setOverviewActionType => {
  return { type: SET_OVERVIEW, payload }
}

export const getOverviews = (employeeName: string): getOverviewsActionType => {
  return { type: LOAD_OVERVIEW, employeeName }
}

export function* watchedOverviews() {
  yield takeLeading(LOAD_OVERVIEW, workerloadOverviews)
}

function* workerloadOverviews(employeeName: getOverviewsActionType) {
  const payload: Array<object> = yield call(fetchOverview , employeeName)
  yield put(setOverview(payload))
}

async function fetchOverview(args: getOverviewsActionType) {
  const employeeName: string = args.employeeName
  const response = await overviewAPI.getOverviews(employeeName)
  return response.data
}
