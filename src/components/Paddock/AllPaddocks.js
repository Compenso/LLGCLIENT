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

  // basic styling for Index values
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderSize: '10px',
    border: '1px solid',
    justifyContent: 'center'
  }
  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'left',
    border: '4px solid',
    borderColor: '#ffffff',
    borderRadius: '10px',
    height: '50vh',
    position: 'relative',
    columnReverse: 'column-reverse',
    backgroundColor: '#d8dfd3'
  }

  // const pushTogether = {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   flexWrap: 'Wrap',
  //   padding: '30px',
  //   borderSize: '30px',
  //   border: '1px solid'
  // }

  return (
    <div>
      <h2 className='wu-paddock-header'>Paddocks</h2>
      <div style = {containerStyle} >
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
        <div style={containerStyle2}>
          {showSystem.map(title => (
            <h2 styel={containerStyle2} key={title._id}>{title.title}</h2>
          )
          )}
        </div>
      </div>
    </div>
  )
}

export default withRouter(AllPaddocks)
