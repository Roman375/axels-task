import React, { FC, useEffect } from 'react'

import { Container, Text } from '../styled/OverviewPage'

type Props = {
  overview: Array<object>
}

const OverviewPage: FC<Props> = ({overview}) => {
  
  useEffect(() => {
    console.log(overview);
  }, [overview])

  return (
    <Container>
      <Text>Overview</Text>
      {overview.map((description: object, index: number) => (
        <div key={index}>
          <h3>{Object.values(description)}</h3>
        </div>
      ))}
    </Container>
  )
}

export default OverviewPage
