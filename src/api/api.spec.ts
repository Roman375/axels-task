import { employeeAPI, overviewAPI } from './api'

//Snapshot
describe('With Snapshot Testing', () => {
  it('get employeeAPI correctly', () => {
    const actual = employeeAPI.getEmployees()
    expect(actual).toMatchSnapshot()
  })

  it('get overviewAPI correctly', () => {
    const name = 'test'
    const actual = overviewAPI.getOverviews(name)
    expect(actual).toMatchSnapshot()
  })
})
