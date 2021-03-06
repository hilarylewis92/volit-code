import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Header from './Header'

class SideBar extends React.Component {
  render(){
    const { profile, auth } = this.props
    return (
      <div className='side-bar'>
        <Header text='administrator' />
        <Link
          className='link'
          to='/event-manager'>
          <h2
            className='organization-name'>
            {profile.organization && profile.organization.org_name}
          </h2>
        </Link>

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
          <img
            className='profile-icon profile-avatar'
            role="presentation"
            src={profile.user && profile.user.picture} />
          <div className='profile-user-info'>
          <p
          className='profile-user-name'>
          You are logged in as:<br/>{profile.user && profile.user.name}
          </p>
          <Link
            to='/organization'
            onClick={auth.logout.bind(this)}
            className='logout-btn'>
            <p>Logout &raquo;</p>
          </Link>
          </div>
        </section>
      </div>
    )
  }
}

SideBar.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

export default SideBar
