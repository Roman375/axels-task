import React, { FC, SetStateAction, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Container, Text } from '../styled/UsersList'
import SearchBar from './SearchBar'

type Props = {
  employees: {
    employees: string[]
  }
  getOverviews: (employeeName: string) => void
  getEmployee: () => void
}

export type eventType = {
  target: {
    value: SetStateAction<string>
  }
}

const UsersList: FC<Props> = ({ employees, getOverviews, getEmployee }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<Array<string>>([])

  const handleChange = (event: eventType) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    getEmployee()
  }, [getEmployee])

  useEffect(() => {
    const results: string[] = employees.employees.filter((employee) =>
      employee.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results)
  }, [searchTerm, employees])

  return (
    <>
      <SearchBar handleChange={handleChange} />
      <Container className="row">
        {searchResults.length > 0 ? (
          searchResults.map((employee, index) => (
            <Card key={index} style={{ width: '18rem', margin: `0.5rem` }}>
              <Card.Body>
                <Card.Title>{employee}</Card.Title>
                <Link
                  className="primary"
                  to={`/overview/${employee}`}
                  onClick={() => {
                    getOverviews(employee)
                  }}
                >
                  Overview page
                </Link>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Text>No Employees</Text>
        )}
      </Container>
    </>
  )
}

export default UsersList
