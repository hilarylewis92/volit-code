import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import moment from 'moment'

import AddEvent from './AddEvent'
import Event from './Event'

export class EventList extends React.Component {
  componentDidMount() {
    const { orgID } = this.props
    this.props.getAllEvents(orgID)
  }

  showAddEventForm() {
    this.refs.modal.showModal()
  }

  shortenDescription(description) {
    if (description.length > 250) {
      return description.substring(0, 250) + "..."
    } else {
      return description
    }
  }

  formatDate(date) {
    return moment(date).format('MMM Do YYYY')
  }

  render(){
    const {events, orgID} = this.props

    var event = events.map((event, i)=> {
      let date = this.formatDate(event.event_date)
      let description = this.shortenDescription(event.event_description)

      return (
        <li
          className='event-list-item'
          key={i}
          id={event.id}>
          <h3
            className='event-list-title'>
            {event.event_name}
          </h3>
          <p
            className='event-list-date'>
            {date}
          </p>
          <p
            className='event-list-description'>
            {event.event_description}
          </p>
          <address className='event-list-address'>
            <a
              target='blank'
              href={`http://maps.google.com/?q=${event.event_address}`}>
              {event.event_address}
            </a>
          </address>
          <Link to={`event-manager/${event.id}`}>
            <button>view event</button>
          </Link>
        </li>
      )
    })

    return (
      <div className='event-list-container'>
        <header
          className='event-list-header'>
          <div className='event-list-header-upcoming'>
            <h2
            className='event-list-upcoming'>
            Upcoming Events
            </h2>
            <p>You have {events.length} upcoming events.</p>
          </div>
          <button
            className='event-list-new-event-btn'
            onClick={()=>this.showAddEventForm()}>
            New Event
          </button>
        </header>

        <ul>
          {event}
        </ul>

        <AddEvent
          createEvent={this.props.createEvent}
          orgID={orgID}
          ref='modal'
        />
      </div>
    )
  }
}

export default EventList
