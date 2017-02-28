import React, { PropTypes } from 'react'
import SideBar from '../components/SideBar'

class RoleManager extends React.Component {
  render() {
    const { auth, profile } = this.props
    return (
      <div>
        <SideBar profile={profile} auth={auth} />
        Role Manager
      </div>
    )
  }
}

RoleManager.propTypes = {
  auth: PropTypes.object.isRequired
}

export default RoleManager
