import React, { PropTypes } from 'react'
import { Link }             from 'react-router'
import moment               from 'moment'
import AddEvent             from './AddEvent'

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

  upcomingEventCount(events) {
    let count = 0
    const todaysDate = Date.now()

    events.forEach(function(event) {
      let eventDate = new Date(event.event_date).getTime()

      if (todaysDate <= eventDate) {
        return count++
      } else {
        return count
      }
    })
    return count
  }

  sortByDate(events) {
    return events.sort(function(a, b) {
      let dateA = new Date(a.event_date).getTime()
      let dateB = new Date(b.event_date).getTime()

      return parseInt(dateA, 10) - parseInt(dateB, 10)
    })
  }

  render() {
    const {events, orgID} = this.props
    const sortedEvents = this.sortByDate(events)

    let event = sortedEvents.map((event, i)=> {
      const todaysDate = Date.now()
      let eventDate = new Date(event.event_date).getTime()
      let date = this.formatDate(event.event_date)
      let description = this.shortenDescription(event.event_description)

      if (todaysDate <= eventDate) {
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
              {description}
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
      } else {
        return null
      }
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
            <p>You have {this.upcomingEventCount(events)} upcoming events.</p>
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
