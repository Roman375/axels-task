import { takeLeading } from '@redux-saga/core/effects'
import { expectSaga } from 'redux-saga-test-plan'
import {
  overview,
  LOAD_OVERVIEW,
  SET_OVERVIEW,
  initialState,
  getOverviews,
  setOverview,
  watchedOverviews,
  workerloadOverviews,
  fetchOverview,
} from './overviews'

describe('Overviews', () => {
  const action = {
    type: SET_OVERVIEW,
    payload: [
      'John Hartman',
      { 'direct-subordinates': ['Samad Pitt', 'Leanna Hogg'] },
    ],
  }
  const employeeName = {
    type: SET_OVERVIEW,
    employeeName: 'John Hartman',
  }

  //Snapshot
  describe('With Snapshot Testing', () => {
    it('handles ACTION_TYPE correctly', () => {
      const actual = overview(initialState, SET_OVERVIEW)
      expect(actual).toMatchSnapshot()
    })
  })

  //Reducer
  describe('Reducer testing', () => {
    it('SET_OVERVIEW', () => {
      expect(overview(initialState, action)).toEqual([
        ...initialState,
        ...action.payload,
      ])
    })
  })

  //Actions
  describe('Action getOverviews testing', () => {
    it('getOverviews()', () => {
      const employeeName = 'Name'
      expect(getOverviews(employeeName)).toEqual({
        type: LOAD_OVERVIEW,
        employeeName,
      })
    })

    it('setOverview()', () => {
      expect(setOverview(action.payload)).toEqual(action)
    })
  })

  //Sagas
  describe('Sagas testing', () => {
    const genObject = watchedOverviews()

    it('should wait for every LOAD_OVERVIEW action and call workerloadOverviews', () => {
      expect(genObject.next().value).toEqual(
        takeLeading(LOAD_OVERVIEW, workerloadOverviews)
      )
    })

    it('fetches the overviews', () => {
      return expectSaga(workerloadOverviews, employeeName)
        .call(fetchOverview, employeeName)
        .put({
          type: SET_OVERVIEW,
          payload: [
            'CEO',
            { 'direct-subordinates': ['Samad Pitt', 'Leanna Hogg'] },
          ],
        })
        .dispatch({ type: SET_OVERVIEW, payload: [] })
        .run()
    })
  })
})
