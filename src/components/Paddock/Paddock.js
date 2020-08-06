import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { newPaddock } from '../../api/paddock'
import messages from '../AutoDismissAlert/messages'

class Paddock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

    onNewPaddock = event => {
      event.preventDefault()

      const { msgAlert, history, user } = this.props

      newPaddock(this.state, user)
        .then(() => msgAlert({
          heading: 'New Paddock!',
          message: messages.createdNewPaddock,
          variant: 'success'
        }))
        .then(() => history.push('/'))
        .catch(() => msgAlert({
          heading: 'Sorry...',
          message: messages.signInFailure,
          variant: 'danger'
        }))
    }

    render () {
      const { title } = this.state

      return (
        <div className="row">
          <div className="col-sm-10 col-md-8 mx-auto mt-5">
            <h3>New Paddock</h3>
            <Form onSubmit={this.onNewPaddock}>
              <Form.Group controlId="newPaddock">
                <Form.Label>New Paddock</Form.Label>
                <Form.Control
                  required
                  name="newPaddock"
                  value={title}
                  type="paddock"
                  placeholder="New Paddock"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      )
    }
}

export default withRouter(Paddock)
