import React, { PropTypes as T } from 'react'
import AuthService from '../utils/AuthService'
import SideBar from './SideBar'

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
