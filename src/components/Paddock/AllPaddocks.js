import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import OnePaddock from './OnePaddock'
// bring in our api call for indexing all Paddocks.
import { allPaddocks } from '../../api/paddock'
// import { allSteps } from '../../api/system'

const AllPaddocks = props => {
  const [paddocksArray, setPaddocksArray] = useState([])
  const [showSystem, setShowSystem] = useState([])

  useEffect(() => {
    const token = props.user.token
    allPaddocks(token)
      .then(res => setPaddocksArray(res.data.paddocks))
      .catch()
  }, [])

  // useEffect(() => {
  //   const padId = props.user.id
  //   allSteps(padId)
  //     .then(res => setStepsArray(res.data.paddocks.systems.title))
  // }, [])

  return (
    <div className='containerStyleDiv'>
      <h2 className='wu-paddock-header'>Paddocks</h2>
      <div className='containerStyle'>
        <div>
          {paddocksArray.map(title => (
            <OnePaddock
              key={title._id}
              title={title}
              showSystem={showSystem}
              setShowSystem={setShowSystem}
            />
          ))}
        </div>
        <div>
          {showSystem.map(title => (
            <h2 className='containerStyle2' key={title._id}>{title.title}</h2>
          )
          )}
        </div>
      </div>
    </div>
  )
}

export default withRouter(AllPaddocks)
