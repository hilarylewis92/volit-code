import React, { PropTypes } from 'react'
import SideBarContainer from '../containers/SideBarContainer'

class RoleManager extends React.Component {
  render() {
    const { auth } = this.props
    return (
      <div>
        <SideBarContainer auth={auth} />
        Role Manager
      </div>
    )
  }
}

RoleManager.propTypes = {
  auth: PropTypes.object.isRequired
}

export default RoleManager
