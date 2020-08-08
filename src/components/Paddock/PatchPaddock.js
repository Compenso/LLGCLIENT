import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'

import { patchPaddock } from '../../api/paddock'
import PatchForm from './PatchForm'

const PatchPaddock = props => {
  const [patch, setPatch] = useState(false)
  const [title, setTitle] = useState({
    title: ''
  })
  console.log(props)
  const handleChange = event => {
    event.persist()
    setPatch(prePaddock => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedPaddock = Object.assign({}, title, updatedField)
      return editedPaddock
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(patch)
    const title = patch
    const token = props.user.token
    const padId = props.redirectProps.location.state.id
    console.log(title, props.redirectProps.location.state.title)
    patchPaddock(padId, title, token)
      .then(res => setTitle(res.data.paddocks))
      .catch(console.error)
  }

  return (
    <div>
      <PatchForm
        title={props.redirectProps.location.state.title}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={'/new-paddock#/all-paddocks'}
      />
    </div>
  )
}

export default PatchPaddock
