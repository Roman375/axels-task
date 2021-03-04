import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'

import {Container} from './styled/styled'
import { UsersList, OverviewPage } from './components'
import { getEmployee } from './redux/ducks/employees'
import { getOverviews } from './redux/ducks/overviews'

const App = ({getEmployee, getOverviews, ...props}) => {

  const getOverview = async (employeeName) => {
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

const mapStateToPrors = (state) => {
  return{
    employees: state.employees,
    overviews: state.overviews
  }
}

export default connect(mapStateToPrors, {getEmployee, getOverviews})(App)
