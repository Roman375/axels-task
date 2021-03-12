import renderer from 'react-test-renderer'
import OverviewPage from './OverviewPage'

describe('<OverviewPage />', () => {
  const props = {
    overview: [],
  }

  describe('With Snapshot Testing', () => {
    it('Render component OverviewPage"', () => {
      const component = renderer.create(<OverviewPage {...props} />)
      expect(component).toMatchSnapshot()
    })
  })
})
