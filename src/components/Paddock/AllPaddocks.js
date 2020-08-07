import React, { useState, useEffect } from 'react'
import OnePaddock from './OnePaddock'
// bring in our api call for indexing all Paddocks.
import { allPaddocks } from '../../api/paddock'

const AllPaddocks = (props) => {
  const [paddocksArray, setPaddocksArray] = useState([])

  useEffect(() => {
    allPaddocks()
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
        {paddocksArray.map(paddock => (
          <OnePaddock
            key={paddock.title}
            title={paddock.title}
          />
        ))}
      </div>
    </div>
  )
}

export default AllPaddocks
