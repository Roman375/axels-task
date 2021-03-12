import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import store from './redux/store'
import App from './App'

describe('<App />', () => {
  const props = {
    getEmployee: () => {},
    getOverviews: () => {},
    employees: [],
    overviews: [],
    sayHi: () => {}
  }

  describe('App render <HomePage />', () => {
    const app = mount(
      <Provider store={store}>
        <App {...props}/>
      </Provider>
    )
    
    it('render properly', () => {
      expect(app).toMatchSnapshot()
    })

    expect(app.find('HomePage')).toHaveLength(1)
  })
})
