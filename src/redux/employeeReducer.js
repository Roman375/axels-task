import { employeeAPI } from '../api/api'
const SET_EMPLOYEE = 'SET_EMPLOYEE'

const initialState = []


const employee = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEE: 
      return [...state, ...action.payload]
    default:
      return state
  }
}

export const setEmployee = (payload) => {
  return { type: SET_EMPLOYEE, payload }
}

export const getEmployee = () => async (dispatch) => {
  const response = await employeeAPI.getEmployees()
  dispatch(setEmployee(response.data))
}



export default employee

