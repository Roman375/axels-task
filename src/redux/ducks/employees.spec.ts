import {
  SET_EMPLOYEE,
  LOAD_EMPLOYEE,
  employee,
  initialState,
  getEmployee,
  setEmployee,
} from './employees'

describe('Overviews', () => {
  const action = {
    type: SET_EMPLOYEE,
    payload: ['John Hartman', 'Samad Pitt'],
  }

  //Snapshot
  describe('With Snapshot Testing', () => {
    it('handles ACTION_TYPE correctly', () => {
      const actual = employee(initialState, SET_EMPLOYEE)
      expect(actual).toMatchSnapshot()
    })
  })

  //Reducer
  describe('Reducer testing', () => {
    it('SET_EMPLOYEE', () => {
      expect(employee(initialState, action)).toEqual({
        ...initialState,
        employees: [...action.payload],
      })
    })
  })

  //Actions
  describe('Action testing', () => {
    it('getEmployee()', () => {
      expect(getEmployee()).toEqual({
        type: LOAD_EMPLOYEE,
      })
    })

    it('setEmployee()', () => {
      expect(setEmployee(action.payload)).toEqual(action)
    })
  })
})
