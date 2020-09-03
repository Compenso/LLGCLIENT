import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
// bring in our api call for creating a new Paddock.
import { newPaddock } from '../../api/paddock'
// Import our form and button from bootstrap.

import NewPaddockForm from './NewPaddockForm'

const NewPaddock = props => {
  const [title, setTitle] = useState({
    title: ''
  })

  const handleChange = event => {
    event.persist()
    setTitle(prevPaddock => {
      const updatedPaddock = { [event.target.name]: event.target.value }
      const newPaddock = Object.assign({}, prevPaddock, updatedPaddock)
      return newPaddock
    })
  }

  const onSubmitPaddock = event => {
    event.preventDefault()
    const { history } = props
    const userId = props.user._id
    console.log('log snats', props)
    newPaddock(userId, title)
      .then(res => console.log(res))
      .then((res) => this)
      .then(() => history.push('/all-paddocks'))
      .catch(console.error)
  }

  return (
    <div className="row">
      <NewPaddockForm
        onSubmitPaddock={onSubmitPaddock}
        handleChange={handleChange}
        cancelPath={'/all-paddocks'}
      />
    </div>
  )
}

export default withRouter(NewPaddock)
