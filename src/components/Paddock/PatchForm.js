import React from 'react'
import { Link } from 'react-router-dom'

const PatchForm = ({ title, handleChange, handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Paddock </label>
    <input
      placeholder="holding space"
      value={title}
      name="title"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default PatchForm
