import {SET_OVERVIEW} from './types'

const initialState = []

const overview = (state = initialState, action) => {
  switch (action.type) {
    case SET_OVERVIEW:
      return [...action.payload]
      default:
        return state
  }
}

export default overview