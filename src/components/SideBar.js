import React from 'react'
import { Link } from 'react-router'

const App = () => {
  return (
    <div>
      <Link to='/dashboard'>
        Dashboard
      </Link>
      <Link to='/event-manager'>
        Event Manager
      </Link>
      <Link to='/role-manager'>
        Role Manager
      </Link>
      <Link to='/volunteers'>
        Volunteers
      </Link>
    </div>
  )
}

export default App
