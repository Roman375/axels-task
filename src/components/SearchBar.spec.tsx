import renderer from 'react-test-renderer'
import SearchBar from './SearchBar'

describe('<SearchBar />', () => {
  const props = {
    handleChange: () => {},
  }

  describe('With Snapshot Testing', () => {
    it('Render component SearchBar"', () => {
      const component = renderer.create(<SearchBar {...props} />)
      expect(component).toMatchSnapshot()
    })
  })
})
