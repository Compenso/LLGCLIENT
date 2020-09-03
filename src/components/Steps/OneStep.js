import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const OneStep = props => {
  const [patch, setPatch] = useState(false)
  const [deleted, setDeleted] = useState(false)

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
    <Col md={4} className='columStyle'>
      <h2>{props.title.title}</h2>
      <div>
        <Button onClick={patchHandler} size='sm' variant="dark">Patch</Button>
        <Button onClick={deleteHandler} size='sm' variant="light">Delete</Button>
        {patch && <Redirect to={{
          pathname: '/patch-step'
        }} />}
        {deleted && <Redirect to={{
          pathname: '/delete-step'
        }} />}
      </div>
    </Col>
  )
}

export default OneStep
