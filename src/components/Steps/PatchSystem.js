import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { patchPaddock } from '../../api/paddock'
import PatchSysForm from './PatchSysForm'

const PatchSystem = props => {
  const [patch, setPatch] = useState(false)
  const [title, setTitle] = useState({
    title: ''
  })

  const handleChange = event => {
    event.persist()
    console.log(event.target.name, event.target.value)
    setTitle(prePaddock => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedPaddock = Object.assign({}, title, updatedField)
      return editedPaddock
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const token = props.user.token
    const padId = props.redirectProps.location.state.id
    patchPaddock(padId, title, token)
      .then(res => setTitle(res.data.paddocks))
      .then(() => setPatch(true))
      .catch(console.error)
  }

  return (
    <div>
      <PatchSysForm
        title={props.redirectProps.location.state.title}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={'/all-paddocks'}
      />
      { patch && <Redirect to='/all-paddocks' /> }
    </div>
  )
}

export default PatchSystem
