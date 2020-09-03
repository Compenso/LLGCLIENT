import React from 'react'
import { Link } from 'react-router-dom'

const NewPaddockForm = ({ title, handleChange, onSubmitPaddock, cancelPath }) => (
  <form onSubmit={onSubmitPaddock}>
    <label>Paddock </label>
    <input
      placeholder="Paddock Name"
      value={title}
      name="title"
      onChange={handleChange}
    />

    <button variant='primary' type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default NewPaddockForm
