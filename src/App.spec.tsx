import renderer from 'react-test-renderer'
import App from './App'
import { Provider } from 'react-redux'

import store from './redux/store'

describe('<App />', () => {
  const props = {
    getEmployee: () => {},
    getOverviews: () => {},
    employees: [],
    overviews: [],
  }

  describe('With Snapshot Testing', () => {
    it('Render component App', () => {
      const component = renderer.create(
        <Provider store={store}>
          <App {...props} />
        </Provider>
      )
      expect(component).toMatchSnapshot()
    })
  })
})
