import React, { PropTypes } from 'react'
import SideBarContainer from '../containers/SideBarContainer'

class Volunteers extends React.Component {
  render() {
    const { auth } = this.props
    return (
      <div>
        <SideBarContainer auth={auth} />
        Volunteers
      </div>
    )
  }
}

Volunteers.propTypes = {
  auth: PropTypes.object.isRequired
}

export default Volunteers
