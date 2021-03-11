import renderer from 'react-test-renderer'
import UserList from './UsersList'

describe('<UserList />', () => {
  const props = {
    employees: {
      employees: [],
    },
    getOverview: () => {},
  }

  describe('With Snapshot Testing', () => {
    it('Render component UserList"', () => {
      const component = renderer.create(<UserList {...props} />)
      expect(component).toMatchSnapshot()
    })
  })
})
