import React, { PropTypes } from 'react'
import SideBar from '../components/SideBar'

class Volunteers extends React.Component {
  render() {
    const { auth } = this.props
    return (
      <div>
        <SideBar auth={auth} />
        Volunteers
      </div>
    )
  }
}

Volunteers.propTypes = {
  auth: PropTypes.object.isRequired
}

export default Volunteers
