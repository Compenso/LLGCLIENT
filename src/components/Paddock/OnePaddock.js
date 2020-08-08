import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { deletePaddock } from '../../api/paddock'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const OnePaddock = ({ title, props }) => {
  console.log(props)
  const [patch, setPatch] = useState(false)
  const [deleted, setDeleted] = useState(false)
  // console.log(title, ' or something')
  const containerStyle = {
    border: '1px solid white',
    height: '70vh',
    position: 'relative'
  }

  const patchHandler = event => {
    event.preventDefault()
    console.log('click')
    setPatch(true)
  }

  const deleteHandler = event => {
    const padId = title._id
    const token = props.user.token
    event.preventDefault()
    console.log('click')
    deletePaddock(padId, token)
  }

  return (
    <Col md={4} style={containerStyle}>
      <h2>Paddock: {title.title}</h2>
      <div>
        <Button onClick={patchHandler} size='sm' variant="light">Patch</Button>
        <Button onClick={deleteHandler} size='sm' variant="light">Delete</Button>
        {patch && <Redirect to={{
          pathname: '/patch-paddock',
          state: {
            title: title.title,
            id: title._id
          }
        }} />}
      </div>
    </Col>
  )
}

export default OnePaddock
