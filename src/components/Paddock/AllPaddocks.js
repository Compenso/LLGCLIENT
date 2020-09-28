import React, { useState, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import OnePaddock from './OnePaddock'
// bring in our api call for indexing all Paddocks.
import { allPaddocks } from '../../api/paddock'
// import { allSteps } from '../../api/system'

const AllPaddocks = props => {
  const [paddocksArray, setPaddocksArray] = useState([])
  const [showStep, setShowStep] = useState([])
  const [patch, setPatch] = useState(false)

  useEffect(() => {
    const token = props.user.token
    allPaddocks(token)
      .then(res => setPaddocksArray(res.data.paddocks))
      .catch()
  }, [])

  const patchHandler = event => {
    event.preventDefault()
    console.log('clunk')
    console.log(props.title)
    setPatch(true)
  }

  return (
    <div className='containerStyleDiv'>
      <h2 className='wu-paddock-header'>Paddocks</h2>
      <div className='containerStyle'>
        <div>
          {paddocksArray.map(title => (
            <OnePaddock
              key={title._id}
              title={title}
              showStep={showStep}
              setShowStep={setShowStep}
            />
          ))}
        </div>
        <div>
          {showStep.map(title => (
            <h2 className='containerStyle2' key={title._id}>{title.title}
              <Button onClick={patchHandler} className='btn' size='sm' variant='dark'>Patch</Button>
              {patch && <Redirect to={{
                pathname: '/patch-step'
              }} />}
              <Button className='btn' size='sm' variant='light'>Delete</Button>
            </h2>
          )
          )}
        </div>
      </div>
    </div>
  )
}

export default withRouter(AllPaddocks)
