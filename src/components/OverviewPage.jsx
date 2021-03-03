import React, { useEffect } from 'react'

import { Container, Text } from '../styled/OverviewPage'

const OverviewPage = ({ overview }) => {
  useEffect(() => {}, [overview])
  return (
    <Container>
      <Text>Overview</Text>
      {Object.values(overview).map((description, index) => (
        <div key={index}>
          <h3>{Object.values(description)}</h3>
        </div>
      ))}
    </Container>
  )
}

export default OverviewPage
