import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import NewStepForm from './NewStepForm'

import { newStep } from '../../api/system'

const Steps = props => {
  const [title, setTitle] = useState({
    title: ''
  })

  const handleChange = event => {
    event.persist()
    setTitle(prevStep => {
      const updatedStep = { [event.target.name]: event.target.value }
      const newStep = Object.assign({}, prevStep, updatedStep)
      return newStep
    })
  }

  const onSubmitStep = event => {
    event.preventDefault()
    const { history } = props
    console.log(props, '26')
    const padId = props.padsysProps.location.state.id

    newStep(padId, title)
      .then(res => console.log(res, 'here at new system.'))
      .then((res) => this)
      .then(() => history.push('/all-paddocks'))
      .catch(console.error)
  }

  return (
    <div className="row">
      <NewStepForm
        onSubmitStep={onSubmitStep}
        handleChange={handleChange}
        cancelPath={'/all-paddocks'}
      />
    </div>
  )
}

export default withRouter(Steps)
