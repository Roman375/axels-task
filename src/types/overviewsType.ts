const SET_OVERVIEW = 'SET_OVERVIEW'
const LOAD_OVERVIEW = 'LOAD_OVERVIEW'

export type StateType = Array<object>

export type setOverviewActionType = {
  type: typeof SET_OVERVIEW
  payload: Array<object>
}

export type getOverviewsActionType = {
  type: typeof LOAD_OVERVIEW
  employeeName: string
}