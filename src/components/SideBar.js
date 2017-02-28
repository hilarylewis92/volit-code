import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class SideBar extends React.Component {
  render(){
    const { events, profile, auth } = this.props
    return (
      <div className='side-bar'>
        <header
          className='side-bar-header'>
          <img
            className='side-bar-icon'
            role="presentation"
            src={require('../assets/icons/icon.svg')}/>
          <h4
            className='side-bar-admin'>
            administrator
          </h4>
        </header>
        <h2
          className='organization-name'>
          {profile.organization && profile.organization.org_name}
        </h2>

        <ul className='side-bar-links'>
          <Link
            className='link'
            to='/dashboard'>
            <li
              className='side-bar-item'>
                <img
                  className='link-icon'
                  role="presentation"
                  src={require('../assets/icons/dashboard.png')}/>
                <span>Dashboard</span>
            </li>
          </Link>
          <Link
            className='link'
            to='/event-manager'>
            <li
              className='side-bar-item'>
                <img
                  className='link-icon'
                  role="presentation"
                  src={require('../assets/icons/event-manager.png')}/>
                <span>Event Manager</span>
            </li>
          </Link>
          <Link
            className='link'
            to='/role-manager'>
            <li
              className='side-bar-item'>
                <img
                  className='link-icon'
                  role="presentation"
                  src={require('../assets/icons/role-manager.png')}/>
                <span>Role Manager</span>
            </li>
          </Link>
          <Link
            className='link'
            to='/volunteers'>
            <li
              className='side-bar-item'>
                <img
                  className='link-icon'
                  role="presentation"
                  src={require('../assets/icons/volunteer.png')}/>
                <span>Volunteers</span>
            </li>
          </Link>
        </ul>
        <section className='profile-container'>
          <p>You are logged in as:<br/>{profile.user && profile.user.name}</p>
          <Link to='/organization'>
            <button
              onClick={auth.logout.bind(this)}
              className='logout-btn'>
              Logout &raquo;
            </button>
          </Link>
        </section>
      </div>
    )
  }
}

SideBar.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  events: PropTypes.array
}

export default SideBar
