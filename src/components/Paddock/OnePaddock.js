import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const OnePaddock = ({ title }) => {
  const [patch, setPatch] = useState(false)
  const [deleted, setDeleted] = useState(false)

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '#d8cfd0',
    height: '50vh',
    position: 'relative'
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
      <h2>{title.title}</h2>
      <div>
        <Button onClick={patchHandler} size='sm' variant="dark">Patch</Button>
        <Button onClick={deleteHandler} size='sm' variant="light">Delete</Button>
        {patch && <Redirect to={{
          pathname: '/patch-paddock',
          state: {
            title: title.title,
            id: title._id
          }
        }} />}
        {deleted && <Redirect to={{
          pathname: '/delete-paddock',
          state: {
            id: title._id
          }
        }} />}
      </div>
    </Col>
  )
}

export default OnePaddock
