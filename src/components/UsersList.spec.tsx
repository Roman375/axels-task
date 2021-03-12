import { mount, shallow } from 'enzyme'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import UserList from './UsersList'

describe('<UserList />', () => {
  const props = {
    employees: {
      employees: ['John', 'Ben'],
    },
    getOverviews: () => {},
    getEmployee: () => {},
  }

  describe('getEmployee is working', () => {
    const mockgetEmployee = jest.fn()
    
    const nextProps = {
      ...props,
      getEmployee: mockgetEmployee,
    }

    const userList = mount(
      <Router>
        <UserList {...nextProps} />
      </Router>
    )

    it('render properly', () => {
      expect(userList).toMatchSnapshot()
    })

    it('renders 2 employees', () => {
      expect(userList.find('Card')).toHaveLength(2)
    })

    expect(mockgetEmployee).toHaveBeenCalledTimes(1)
  })
})
