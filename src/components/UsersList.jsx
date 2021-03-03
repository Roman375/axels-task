import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Container, Text } from '../styled/UsersList'
import SearchBar from './SearchBar'

const UsersList = ({ employees, getOverview }) => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchResults, setSearchResults] = React.useState([])

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const results = employees.filter((employee) =>
      employee.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results)
  }, [searchTerm, employees, getOverview])

  return (
    <>
      <SearchBar handleChange={handleChange} />
      <Container className='row'>
        {searchResults.length > 0 ? (
          searchResults.map((employee, index) => (
            <Card style={{ width: '18rem', margin: `0.5rem`}}>
              <Card.Body key={index} >
                <Card.Title>{employee}</Card.Title>
                <Link
                  variant="primary"
                  to={`/overview/${employee}`}
                  onClick={() => {
                    getOverview(Object.values({ employee }))
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
