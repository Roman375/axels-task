import React, { FC, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Container, Text } from '../styled/UsersList'
import SearchBar from './SearchBar'

type Props = {
  employees: [] 
  getOverview: (employeeName: any) => void
}

const UsersList: FC<Props> = ({ employees, getOverview }) => {

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  };

  useEffect(() => {
    const results = employees.filter((employee: any) =>
      employee.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results)
  }, [searchTerm, employees])

  return (
    <>
     <SearchBar handleChange={handleChange} />
      <Container className='row'>
        {searchResults.length > 0 ? (
          searchResults.map((employee, index) => (
            <Card key={index} style={{ width: '18rem', margin: `0.5rem`}}>
              <Card.Body >
                <Card.Title>{employee}</Card.Title>
                <Link
                  className="primary"
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
