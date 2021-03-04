import React, {useEffect} from 'react'

import { Container } from './styled'

const OverviewPage = ({overview}) => {

  useEffect(() => {
  }, [overview])

  console.log(overview);
  return (
    <Container>
      {overview.map((description, index) => (
        <div key={index}>
          <h3>{Object.values(description)}</h3>
          </div>
      ))}
          
    </Container>
  )
}

export default OverviewPage
