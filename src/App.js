import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router'

import {Container} from './styled'
import UsersList from './components/UsersList'
import OverviewPage from './components/OverviewPage'


const employeesAPI = 'http://api.additivasia.io/api/v1/assignment/employees'

const App = () => {
  const [employees, setEmployees] = useState([])
  const [overview, setOverview] = useState([])

  const getEmployees = (API) => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setEmployees(data)
      })
  }
  const getOverview = (employeeName) => {
    fetch(`http://api.additivasia.io/api/v1/assignment/employees/${employeeName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setOverview(data)
      })
  }

  useEffect(() => {
    getEmployees(employeesAPI)
  }, [])

  return (
    <Container>
      
      <Switch>
      <Route exact path='/' render={() => 
      <UsersList employees={employees} getOverview={getOverview}/>}/>
      <Route exact path='/overview/:employee?' render={() => 
      <OverviewPage employees={employees} overview={overview} getOverview={getOverview}/>}/>
      
      </Switch>
    </Container>
  )
}

export default App
