import {SET_EMPLOYEE} from './types'

const initialState = []

const employee = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEE: 
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default employee

