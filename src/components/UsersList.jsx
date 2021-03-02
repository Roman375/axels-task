import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Wrapp, Text } from './styled'
import SearchBar from './SearchBar'

const UsersList = ({ employees, getOverview  }) => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchResults, setSearchResults] = React.useState([])
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }
  React.useEffect(() => {
    const results = employees.filter((employee) =>
      employee.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results)
  }, [searchTerm, employees, getOverview])

  return (
    <>
      <SearchBar handleChange={handleChange} />
      <Container>
        {
        searchResults.length > 0 ?
        searchResults.map((employee, index) => (
          <Wrapp key={index}>
            <h3>{employee}</h3>
            <Link
              to={`/overview/${employee}`}
              onClick={() => {getOverview(Object.values({ employee }))}}
            >
              Overview page
            </Link>
          </Wrapp>
        )) : <Text>No Employees</Text>}
      </Container>
    </>
  )
}

export default UsersList
