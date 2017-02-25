import React, { PropTypes as T } from 'react'
import AuthService from '../utils/AuthService'
import EventList from './EventList'

export class EventManager extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  componentDidMount() {
    const profile = JSON.parse(localStorage.getItem('profile'))
    const org_name = localStorage.getItem('org_name')
    this.props.adminLogin(profile, org_name)
  }

  render(){
    const { events, createEvent, profile, getAllEvents } = this.props

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
        <div className="event-manager-container">
          {data}
        </div>
      </div>
    )
  }
}

export default EventManager
