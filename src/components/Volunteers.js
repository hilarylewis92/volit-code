import React, { PropTypes } from 'react'
import SideBar from '../components/SideBar'

class Volunteers extends React.Component {
  render() {
    const { auth, profile } = this.props
    return (
      <div>
        <SideBar profile={profile} auth={auth}  />
        Volunteers
      </div>
    )
  }
}

Volunteers.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

export default Volunteers
