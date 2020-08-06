import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
// bring in our api call for creating a new Paddock.
import { newPaddock } from '../../api/paddock'
// Import our form and button from bootstrap.
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// bring in a unique message for when a new paddock is created.
// import messages from '../AutoDismissAlert/messages'

const NewPaddock = props => {
  console.log(props.user._id)
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
    const userId = props.user._id
    console.log(title, 'Line 29 so fine.')
    newPaddock(userId, title)
      .then(res => console.log(res))
      .then((res) => this)
      .catch(console.error)
  }
  console.log(title)

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Product Create</h3>
        <Form onSubmit={onSubmitPaddock}>
          <Form.Group controlId="name">
            <Form.Label>New Paddock</Form.Label>
            <Form.Control
              required
              type="name"
              name="title"
              value={title.name}
              placeholder="Paddock Name"
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default withRouter(NewPaddock)
