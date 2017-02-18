import React, { PropTypes as T } from 'react'
import AddEvent from './AddEvent'

export class EventList extends React.Component {
  showAddEventForm() {
    this.refs.modal.showModal()
  }

  render(){
    var eventMonthCount=5
    var eventYearCount=35
    return (
      <div className='EventList'>
        <header
          className='event-list-header'>
          <h3
            className='event-list-title'>
            Upcoming Events
          </h3>
          <button
            className='event-list-new-event-btn'
            onClick={()=>this.showAddEventForm()}>
            New Event
          </button>
          <span
            className='event-list-count'>
            {eventMonthCount} events this month,
            {eventYearCount} events this year
          </span>
        </header>

        <ul
          className='event-list-date'>
          <span>date of event</span>
          <li
            className='event-list-list-item'>
            <h5>title of event</h5>
            <p>description of event</p>
          </li>
        </ul>

        <AddEvent
          ref='modal'
        />
      </div>
    )
  }
}

export default EventList
