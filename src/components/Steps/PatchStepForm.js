import React from 'react'
import { Link } from 'react-router-dom'

const PatchStepForm = ({ title, handleChange, handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Step </label>
    <input
      placeholder="New Step Title"
      value={title.title}
      name="title"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default PatchStepForm
