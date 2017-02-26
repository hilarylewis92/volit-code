import React, { PropTypes } from 'react'
import AuthService from '../utils/AuthService'
import EventList from './EventList'
import SideBarContainer from '../containers/SideBarContainer'

class EventManager extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    const profile = JSON.parse(localStorage.getItem('profile'))
    const org_name = localStorage.getItem('org_name')
    this.props.adminLogin(profile, org_name)
  }

  render(){
    const { events, createEvent, profile, getAllEvents, auth } = this.props

    let data
    if(profile.organization) {
      data = (
        <EventList
          orgID={profile.organization.org_id}
          createEvent={createEvent}
          events={events}
          getAllEvents={getAllEvents}
          />
      )
    } else {
      data = (
        <div>loading...</div>
      )
    }

    return (
      <div className="dashboard-container">
        <SideBarContainer auth={auth} />
        <div className="event-manager-container">
          {data}
        </div>
      </div>
    )
  }
}

EventManager.propTypes = {
  events: PropTypes.array,
  createEvent: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getAllEvents: PropTypes.func.isRequired,
  adminLogin: PropTypes.func.isRequired,
  auth: PropTypes.instanceOf(AuthService)
}

export default EventManager
