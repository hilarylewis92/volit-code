import React, { Component } from 'react'
import { Link } from 'react-router'
import AuthService from '../utils/AuthService'

export default class SideBar extends Component {
  logout() {
    this.props.auth.logout()
    this.context.router.push('/organization')
  }

  render(){
    const { events, profile } = this.props
    console.log(this.props);
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
        <p>Logged in as: <span>{profile.user && profile.user.name}</span></p>
        <button
          onClick={this.logout.bind(this)}>
          Logout
        </button>
      </div>
    )
  }
}
