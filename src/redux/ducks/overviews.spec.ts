import {
  overview,
  LOAD_OVERVIEW,
  SET_OVERVIEW,
  initialState,
  getOverviews,
  setOverview,
} from './overviews'

describe('Overviews', () => {
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
      const action = {
        type: SET_OVERVIEW,
        payload: ['John Hartman', { 'direct-subordinates': ['d', 'f'] }],
      }

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
  })

  describe('Action SET_OVERVIEW testing', () => {
    const action = {
      type: SET_OVERVIEW,
      payload: ['John Hartman', { 'direct-subordinates': ['d', 'f'] }],
    }

    it('setOverview()', () => {
      expect(setOverview(action.payload)).toEqual(action)
    })
  })
})
