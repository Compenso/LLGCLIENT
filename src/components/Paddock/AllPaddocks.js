import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import OnePaddock from './OnePaddock'
// bring in our api call for indexing all Paddocks.
import { allPaddocks } from '../../api/paddock'

const AllPaddocks = props => {
  console.log(props.user.token)
  const [paddocksArray, setPaddocksArray] = useState([])
  console.log(paddocksArray)
  useEffect(() => {
    const token = props.user.token
    allPaddocks(token)
      .then(res => setPaddocksArray(res.data.paddocks))
      .catch()
  }, [])

  // basic styling for Index values
  const containerStyle = {
    display: 'flex',
    flexWrap: 'Wrap',
    padding: '30px'
  }

  return (
    <div>
      <h2 className='paddock-header'>Paddocks</h2>
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
