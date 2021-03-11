const SET_OVERVIEW = 'SET_OVERVIEW'
const LOAD_OVERVIEW = 'LOAD_OVERVIEW'

type overviewsType = {
  'direct-subordinates': string[]
}

export type StateType = (string | overviewsType)[]

export type setOverviewActionType = {
  type: typeof SET_OVERVIEW
  payload: (string | overviewsType)[];
}

export type getOverviewsActionType = {
  type: typeof LOAD_OVERVIEW
  employeeName: string
}

export type getOverviewsType = {
  data: (string | overviewsType)[]
}
