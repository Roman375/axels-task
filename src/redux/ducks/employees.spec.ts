import { takeLeading } from '@redux-saga/core/effects'
import { expectSaga } from 'redux-saga-test-plan'
import {
  SET_EMPLOYEE,
  LOAD_EMPLOYEE,
  employee,
  initialState,
  getEmployee,
  setEmployee,
  fetchEmployee,
  workerloadEmployees,
  watchedEmployees,
} from './employees'

describe('Employees', () => {
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

  //Sagas
  describe('Sagas testing', () => {
    const genObject = watchedEmployees()

    it('should wait for every LOAD_EMPLOYEE action and call workerloadEmployees', () => {
      expect(genObject.next().value).toEqual(
        takeLeading('LOAD_EMPLOYEE', workerloadEmployees)
      )
    })

    it('fetches the employees', () => {
      return expectSaga(workerloadEmployees)
        .call(fetchEmployee)
        .put({
          type: SET_EMPLOYEE,
          payload: [
            'John Hartman',
            'Samad Pitt',
            'Amaya Knight',
            'Leanna Hogg',
            'Aila Hodgson',
            'Vincent Todd',
            'Faye Oneill',
            'Lynn Haigh',
            'Nylah Riddle',
          ],
        })
        .dispatch({ type: SET_EMPLOYEE, payload: [] })
        .run()
    })
  })
})
