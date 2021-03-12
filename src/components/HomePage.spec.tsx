import React from 'react'
import { mount } from 'enzyme'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import HomePage from './HomePage'

describe('<HomePage />', () => {
  const props = {
    getEmployee: () => {},
    getOverviews: () => {},
    employees: {
      employees: ['john', 'ben'],
    },
    overviews: [],
  }

  describe('HomePage render <UsersList />', () => {
    const homePage = mount(<HomePage {...props} />)

    it('render properly', () => {
      expect(homePage).toMatchSnapshot()
    })

    expect(homePage.find('UsersList')).toHaveLength(1)
  })

  describe('full app rendering/navigating', () => {
    const renderWithRouter = (ui: any, { route = '/' } = {}) => {
      window.history.pushState({}, 'Test page', route)

      return render(ui, { wrapper: MemoryRouter })
    }

    it('Router UsersList', () => {
      renderWithRouter(<HomePage {...props} />)
      expect(screen.getByText(/john/i)).toBeInTheDocument()
    })

    it('Router OverviewPage', () => {
      renderWithRouter(<HomePage {...props} />, {
        route: '/overview/:employee',
      })

      expect(screen.getByText(/Overview/i)).toBeInTheDocument()
    })
  })
})
