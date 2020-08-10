import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import OnePaddock from './OnePaddock'
// bring in our api call for indexing all Paddocks.
import { allPaddocks } from '../../api/paddock'

const AllPaddocks = props => {
  const [paddocksArray, setPaddocksArray] = useState([])
  useEffect(() => {
    const token = props.user.token
    allPaddocks(token)
      .then(res => setPaddocksArray(res.data.paddocks))
      .catch()
  }, [])

  // basic styling for Index values
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'Wrap',
    padding: '30px',
    borderSize: '30px',
    border: '1px solid'
  }

  return (
    <div>
      <h2 className='wu-paddock-header'>Paddocks</h2>
      <div style = {containerStyle} >
        {paddocksArray.map(title => (
          <OnePaddock
            key={title._id}
            title={title}
          />
        ))}
      </div>
    </div>
  )
}

export default withRouter(AllPaddocks)
