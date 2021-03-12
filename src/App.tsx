import React, { FC } from 'react'
import { connect } from 'react-redux'

import { getEmployee } from './redux/ducks/employees'
import { getOverviews } from './redux/ducks/overviews'
import { HomePage } from './components'

type Props = {
  getEmployee: () => void
  getOverviews: (employeeName: string) => void
  employees: {
    employees: string[]
  }
  overviews: Array<object>
}

type mapStateToProrsType = {
  employees: {
    employees: []
  }
  overviews: Array<object>
}

const App: FC<Props> = (props) => <HomePage {...props}/>

const mapStateToPrors = (state: mapStateToProrsType) => ({
  employees: state.employees,
  overviews: state.overviews,
})

export default connect(mapStateToPrors, { getEmployee, getOverviews })(App)
