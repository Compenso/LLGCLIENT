import React from 'react'

import Col from 'react-bootstrap/Col'

const OnePaddock = ({ title }) => {
  const containerStyle = {
    border: '1px solid white',
    height: '70vh',
    position: 'relative'
  }

  return (
    <Col md={4} style={containerStyle}>
      <h2>Paddock: {title}</h2>
    </Col>
  )
}

export default OnePaddock
