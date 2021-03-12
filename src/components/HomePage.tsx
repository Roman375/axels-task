import React, { FC } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import { Container } from '../styled/styled'
import { UsersList, OverviewPage } from '../components'

type Props = {
  getEmployee: () => void
  getOverviews: (employeeName: string) => void
  employees: {
    employees: string[]
  }
  overviews: Array<object>
}

const HomePage: FC<Props> = ({ getEmployee, getOverviews, ...props }) => (
  <Router>
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <UsersList
              getEmployee={getEmployee}
              employees={props.employees}
              getOverviews={getOverviews}
            />
          )}
        />
        <Route
          exact
          path="/overview/:employee"
          render={() => <OverviewPage overview={props.overviews} />}
        />
      </Switch>
    </Container>
  </Router>
)

export default HomePage
