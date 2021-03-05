import React, { FC, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'

import {Container} from './styled/styled'
import { UsersList, OverviewPage } from './components'
import { getEmployee } from './redux/ducks/employees'
import { getOverviews } from './redux/ducks/overviews'

type Props = {
  getEmployee: () => void
  getOverviews: (employeeName: string) => void
  employees: []
  overviews: Array<object>
}

const App: FC<Props> = ({getEmployee, getOverviews, ...props}) => {

  const getOverview = async (employeeName: string) => {
    await getOverviews(employeeName)
  }

  useEffect(() => {
   getEmployee()
   
  }, [getEmployee])

  return (
    <Container>
      <Switch>
      <Route exact path='/' render={() => 
      <UsersList employees={props.employees} getOverview={getOverview}/>}/>
      <Route exact path='/overview/:employee?' render={() => 
      <OverviewPage overview={props.overviews} />}/>
      </Switch>
    </Container>
  )
}

const mapStateToPrors = (state: any) => {
  return{
    employees: state.employees,
    overviews: state.overviews
  }
}

export default connect(mapStateToPrors, {getEmployee, getOverviews})(App)
