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
    const name = profile.name
    const email = profile.email
    const organization_name = localStorage.getItem('org_name')
    axios.post('/api/users', ({name: name, email: email, organization_name: organization_name}))
    .then(res => {
      console.log('response from db', res);
    })
  }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/login');
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
