import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router'
import axios from 'axios'

import {Container} from './styled'
import UsersList from './components/UsersList'
import OverviewPage from './components/OverviewPage'


const App = () => {
  const [employees, setEmployees] = useState([])
  const [overview, setOverview] = useState([])

  const getEmployees = () => {
    axios.get(`http://api.additivasia.io/api/v1/assignment/employees`)
    .then((response) => setEmployees(response.data))
  }
  const getOverview = (employeeName) => {
    axios.get(`http://api.additivasia.io/api/v1/assignment/employees/${employeeName}`)
      .then((response) => setOverview(response.data))
  }

  useEffect(() => {
    getEmployees()
  }, [])


  return (
    <Container>
      
      <Switch>
      <Route exact path='/' render={() => 
      <UsersList employees={employees} getOverview={getOverview}/>}/>
      <Route exact path='/overview/:employee?' render={() => 
      <OverviewPage overview={overview} />}/>
      
      </Switch>
    </Container>
  )
}

export default App
