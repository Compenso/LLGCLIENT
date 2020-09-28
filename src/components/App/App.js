import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import Paddock from '../Paddock/Paddock'
import AllPaddocks from '../Paddock/AllPaddocks'
import PatchPaddock from '../Paddock/PatchPaddock'
import DeletePaddock from '../Paddock/DeletePaddock'

import PatchStep from '../Steps/PatchStep'
import NewSteps from '../Steps/NewSteps'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/all-paddocks' render={() => (
            <AllPaddocks user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/new-paddock' render={() => (
            <Paddock user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/patch-paddock' render={(redirectProps) => (
            <PatchPaddock user={user} redirectProps={redirectProps} />
          )} />
          <AuthenticatedRoute user={user} path='/delete-paddock' render={(padProps) => (
            <DeletePaddock user={user} padProps={padProps} />
          )} />
          <AuthenticatedRoute user={user} path='/new-step' render={(padStepsProps) => (
            <NewSteps user={user} padsysProps={padStepsProps} />
          )} />
          <AuthenticatedRoute user={user} path='/patch-step' render={(redirectProps) => (
            <PatchStep user={user} redirectProps={redirectProps} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
