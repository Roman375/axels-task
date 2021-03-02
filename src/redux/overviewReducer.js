import { overviewAPI } from '../api/api'
const SET_OVERVIEW = 'SET_OVERVIEW'

const initialState = []


const overview = (state = initialState, action) => {
  switch (action.type) {
    case SET_OVERVIEW: 
      return {...state, ...action.payload}
    default:
      return state
  }
}

export const setOverview = (payload) => {
  return { type: SET_OVERVIEW, payload }
}

export const getOverviews = (employeeName) => async (dispatch) => {
  debugger
  const response = await overviewAPI.getOverviews(employeeName)
  dispatch(setOverview(response.data))
}

export default overview