import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

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

  render(){
    const {events, orgID} = this.props

    var event = events.map((event, i)=> {
      return (
        <li
          className='event-list-item'
          key={i}
          id={event.id}>
          <Link to={`event-manager/${event.id}`}>
          <div>
            {event.event_name}
          </div>
          <div>
            {event.event_date}
          </div>
          <div>
            {event.event_description}
          </div>
          <div>
            {event.event_address}
          </div>
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
            className='event-list-title'>
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
