import React, { PropTypes as T } from 'react'
import AuthService from '../utils/AuthService'
import SideBar from './SideBar'
import EventList from './EventList'

export class EventManager extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context, events) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
  }

  componentDidMount() {
    const profile = JSON.parse(localStorage.getItem('profile'))
    const org_name = localStorage.getItem('org_name')
    this.props.adminLogin(profile, org_name)
  }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/organization')
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
        <SideBar />
        <div className="event-manager-container">
          {data}
          <p>Logged in as: <span>{this.state.profile.name}</span></p>
          <button
            onClick={this.logout.bind(this)}>
            Logout
          </button>
        </div>
      </div>
    )
  }
}

export default EventManager
