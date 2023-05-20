import React from 'react'
import { Container, Row, Col } from 'react-grid-system'

import { FallbackHeadline } from './styles'

const FallbackModule = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <FallbackHeadline>
          Explore your surroundings, <br />
          Accelerate your running
        </FallbackHeadline>
      </Col>
    </Row>
  </Container>
)

export default FallbackModule
