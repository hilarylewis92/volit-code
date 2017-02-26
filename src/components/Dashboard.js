import React, { PropTypes } from 'react'
import SideBarContainer from '../containers/SideBarContainer'

class Dashboard extends React.Component {
  render() {
    const { auth } = this.props
    return (
      <div>
        <SideBarContainer auth={auth} />
        Dashboard
      </div>
    )
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
}

export default Dashboard
