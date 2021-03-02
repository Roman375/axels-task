import React, { useEffect } from 'react'

import { Container, Text } from './styled'

const OverviewPage = ({ overview }) => {
  useEffect(() => {}, [overview])
  // const info = Object.getOwnPropertyDescriptor(overview[1], 'direct-subordinates').value
  // console.log(info)
  return (
    <Container>
      <Text>Overview</Text>
      <h1>{overview[0]}</h1>
      {overview.map((description, index) => (
        <div key={index}>
          <h3>{Object.values(description)}</h3>
        </div>
      ))}
    </Container>
  )
}

export default OverviewPage
