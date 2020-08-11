import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { newSystem } from '../../api/system'

const Steps = props => {
  const [title, setTitle] = useState({
    title: ''
  })

  const handleChange = event => {
    event.persist()
    setTitle(prevSystem => {
      const updatedSystem = { [event.target.name]: event.target.value }
      const newSystem = Object.assign({}, prevSystem, updatedSystem)
      return newSystem
    })
  }

  const onSubmitSystem = event => {
    event.preventDefault()
    const { history } = props
    console.log(props, '26')
    const padId = props.padsysProps.location.state.id

    newSystem(padId, title)
      .then(res => console.log(res, 'here at new system.'))
      .then((res) => this)
      .then(() => history.push('/all-paddocks'))
      .catch(console.error)
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>System</h3>
        <Form onSubmit={onSubmitSystem}>
          <Form.Group controlId="name">
            <Form.Label>Small Piece of the Big...</Form.Label>
            <Form.Control
              required
              type="name"
              name="title"
              value={title.name}
              placeholder="System Name"
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit">
              Send It
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default withRouter(Steps)
