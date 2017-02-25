import React, { PropTypes as T } from 'react'
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
    const {events, orgID} = this.props
    var event = events.map((event, i)=> {
      let date = moment(event.event_date).format('MMM Do YYYY')

      return (
      <li className='event-list-item' key={i}>
        <h3>{event.event_name}</h3>
        <p>{date}</p>
        <p>{event.event_description}</p>
        <p>{event.event_address}</p>
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
