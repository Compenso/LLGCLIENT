import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { deletePaddock } from '../../api/paddock'
import DeleteForm from './DeleteForm'

const DeletePaddock = props => {
  const [deleted, setDeleted] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    const token = props.user.token
    const padId = props.padProps.location.state.id
    deletePaddock(padId, token)
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  return (
    <div>
      <DeleteForm
        handleSubmit={handleSubmit}
        cancelPath={'/all-paddocks'}
      />
      { deleted && <Redirect to='/all-paddocks' /> }
    </div>
  )
}

export default DeletePaddock
