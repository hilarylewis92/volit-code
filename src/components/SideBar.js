import React, { Component } from 'react'
import { Link } from 'react-router'

export default class SideBar extends Component{

  render(){
    return (
      <div className='SideBar'>
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
          Organization Name Here
        </h2>

        <ul className='side-bar-links'>
          <li
            className='side-bar-item'>
            <Link
              className='link'
              to='/dashboard'>
              <img
                className='link-icon'
                role="presentation"
                src={require('../assets/icons/dashboard.png')}/>
              <span>Dashboard</span>
            </Link>
          </li>

          <li
            className='side-bar-item'>
            <Link
              className='link'
              to='/event-manager'>
              <img
                className='link-icon'
                role="presentation"
                src={require('../assets/icons/event-manager.png')}/>
              <span>Event Manager</span>
            </Link>
          </li>

          <li
            className='side-bar-item'>
            <Link
              className='link'
              to='/role-manager'>
              <img
                className='link-icon'
                role="presentation"
                src={require('../assets/icons/role-manager.png')}/>
              <span>Role Manager</span>
            </Link>
          </li>

          <li
            className='side-bar-item'>
            <Link
              className='link'
              to='/volunteers'>
              <img
                className='link-icon'
                role="presentation"
                src={require('../assets/icons/volunteer.png')}/>
              <span>Volunteers</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
