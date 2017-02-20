import React, { PropTypes as T } from 'react'
import axios from 'axios'
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

  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }

  componentDidMount() {
    const profile = JSON.parse(localStorage.getItem('profile'))
    const org_name = localStorage.getItem('org_name')
    this.props.adminLogin(profile, org_name)
  }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/organization');
  }

  render(){
    const { profile } = this.state
    return (
      <div>
        <SideBar />
        <div>
          <EventList />
          <p>Logged in as: <span>{profile.name}</span></p>
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
