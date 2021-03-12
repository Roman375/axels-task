import { mount } from 'enzyme'

import OverviewPage from './OverviewPage'

describe('<OverviewPage />', () => {
  const props = {
    overview: [
      'John Hartman',
      { 'direct-subordinates': ['Samad Pitt', 'Leanna Hogg'] },
    ],
  }
  const app = mount(<OverviewPage {...props} />)

  it('render properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('renders overview twice', () => {
    expect(app.find('div')).toHaveLength(2)
  })
})
