import React, { PropTypes } from 'react'
import AddEvent from './AddEvent'
import moment from 'moment'

export class EventList extends React.Component {
  componentDidMount() {
    const { orgID } = this.props
    this.props.getAllEvents(orgID)
  }

  showAddEventForm() {
    this.refs.modal.showModal()
  }

  render(){
    const { events, orgID } = this.props
    var event = events.map((event, i)=> {
      let date = moment(event.event_date).format('MMM Do YYYY')

      return (
      <li className='event-list-item' key={i}>
        <h3 className='event-list-title'>{event.event_name}</h3>
        <p className='event-list-date'>{date}</p>
        <p className='event-list-description'>{event.event_description}</p>
        <address className='event-list-address'>
          <a
            target='blank' href={`http://maps.google.com/?q=${event.event_address}`}>
            {event.event_address}
          </a>
        </address>
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

EventList.propTypes = {
  orgID: PropTypes.number,
  getAllEvents: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  createEvent: PropTypes.func.isRequired
}

export default EventList
