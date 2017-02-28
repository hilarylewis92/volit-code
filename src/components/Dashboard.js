import React, { PropTypes } from 'react'
import SideBar from '../components/SideBar'

class Dashboard extends React.Component {
  render() {
    const { auth, profile } = this.props
    return (
      <div>
        <SideBar profile={profile} auth={auth} />
        Dashboard
      </div>
    )
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

export default Dashboard
