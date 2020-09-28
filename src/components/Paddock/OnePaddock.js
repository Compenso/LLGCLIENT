import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { allSteps } from './../../api/step'

const OnePaddock = (props) => {
  console.log(props.title._id, 'soup')
  const [patch, setPatch] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [step, setSteps] = useState(false)
  const [showSteps, setShowSteps] = useState(false)

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

  const stepHandler = event => {
    event.preventDefault()
    console.log('Blump sys handler')
    setSteps(true)
  }

  const showStepsHandler = event => {
    event.preventDefault()
    console.log(props, 'line 36 step handle.')
    setShowSteps(!showSteps)
    if (!props.title.steps[0]) {
      props.setShowSteps([{ _id: 7, title: 'Nothing Here' }])
      return
    }
    const padId = props.title._id
    const stepId = props.title.steps[0]._id
    allSteps(padId, stepId)
      .then((res) => props.setShowSteps(res.data.steps))
      .catch(() => console.log('all steps failed.'))
  }

  return (
    <Col md={4} className='columnStyle'>
      <h2>{props.title.title}</h2>
      <div>
        <Button onClick={patchHandler} size='sm' variant="dark">Patch</Button>
        <Button onClick={deleteHandler} size='sm' variant="light">Delete</Button>
        <Button onClick={stepHandler} size='sm' variant="light">Add</Button>
        <Button onClick={showStepsHandler} size='sm' variant="dark">Show</Button>
        {patch && <Redirect to={{
          pathname: '/patch-paddock',
          state: {
            title: props.title.title,
            id: props.title._id
          }
        }} />}
        {deleted && <Redirect to={{
          pathname: '/delete-paddock',
          state: {
            id: props.title._id
          }
        }} />}
        {step && <Redirect to={{
          pathname: '/new-step',
          state: {
            id: props.title._id
          }
        }} />}
        <div className='show-steps'>
          {showSteps && <div>☂</div>}
        </div>
      </div>
    </Col>
  )
}

export default OnePaddock
