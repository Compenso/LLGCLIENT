import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const OneStep = props => {
  const [patch, setPatch] = useState(false)
  const [deleted, setDeleted] = useState(false)

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '4px solid',
    borderColor: '#ffffff',
    borderRadius: '10px',
    height: '50vh',
    position: 'relative',
    columnReverse: 'column-reverse'
  }

  const patchHandler = event => {
    event.preventDefault()
    console.log('click')
    setPatch(true)
  }

  const deleteHandler = event => {
    event.preventDefault()
    console.log('click')
    setDeleted(true)
  }

  return (
    <Col md={4} style={containerStyle}>
      <h2>{props.title.title}</h2>
      <div>
        <Button onClick={patchHandler} size='sm' variant="dark">Patch</Button>
        <Button onClick={deleteHandler} size='sm' variant="light">Delete</Button>
        {patch && <Redirect to={{
          pathname: '/patch-system',
          state: {
            title: props.title.title,
            id: props.title._id
          }
        }} />}
        {deleted && <Redirect to={{
          pathname: '/delete-system',
          state: {
            id: props.title._id
          }
        }} />}
      </div>
    </Col>
  )
}

export default OneStep
