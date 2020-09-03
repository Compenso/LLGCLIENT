import React from 'react'
import { Link } from 'react-router-dom'

const NewStepForm = ({ title, handleChange, onSubmitStep, cancelPath }) => (
  <form onSubmit={onSubmitStep}>
    <label>Paddock </label>
    <input
      placeholder="New Step"
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

export default NewStepForm
