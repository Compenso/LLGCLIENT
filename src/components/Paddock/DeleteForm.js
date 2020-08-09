import React from 'react'
import { Link } from 'react-router-dom'

const DeleteForm = ({ handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Really want to delete this Paddock? </label>

    <button type="submit">Delete</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default DeleteForm
