import React, { useEffect } from 'react'

import { Container, Text } from '../styled/OverviewPage'

const OverviewPage = ({overview}) => {
  
  useEffect(() => {
    console.log(overview);
  }, [overview])

  return (
    <Container>
      <Text>Overview</Text>
      {overview.map((description, index) => (
        <div key={index}>
          <h3>{Object.values(description)}</h3>
        </div>
      ))}
    </Container>
  )
}

export default OverviewPage
