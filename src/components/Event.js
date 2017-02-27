import React, { PropTypes } from 'react'
import SideBarContainer from '../containers/SideBarContainer'
import moment from 'moment'

import EditEvent from './EditEvent'

export class Event extends React.Component {
  constructor(){
    super()
    this.state = {
      role: '',
      eventID: '',
    }
  }

  componentDidMount() {
    const eventID = this.props.params.event_id
    this.setState ({
      eventID
    })
    this.props.getAllRoles(eventID)
  }

  handleAddRoles() {
    const { role, eventID } = this.state
    this.props.createRole(role, eventID)
  }

  showAddEventForm() {
    this.refs.editModal.showModal()
  }

  formatDate(date) {
    return moment(date).format('MMM Do YYYY')
  }

  render(){
    const { events, roles, auth, editEvent } = this.props

    const eventID = this.props.params.event_id

    const singleEvent = events.find(event => {
      if (event.id === parseInt(eventID, 10))
        return event
    })

    const date = this.formatDate(singleEvent.event_date)

    const eventRoles = roles.filter(role => {
      if(role.event_id === parseInt(eventID, 10))
      return role
    })

    const role = eventRoles.map((role, i) => {
      return (
        <li
          key={i}>
          {role.role_name}
        </li>
      )
    })

    let data
    if(singleEvent.id) {
      data = (
        <EditEvent
          eventID={this.state.eventID}
          event={singleEvent}
          ref='editModal'
          editEvent={editEvent}
        />
      )
    } else {
      data = (
        <div>loading...</div>
      )
    }

    return (
      <div>
        <SideBarContainer auth={auth} />
        <div className="event-manager-container">
          <h2>
            {singleEvent.event_name}
          </h2>
          <p>
            {date}
          </p>
          <p>
            {singleEvent.event_description}
          </p>
          <address className='event-list-address'>
            <a
              target='blank'
              href={`http://maps.google.com/?q=${singleEvent.event_address}`}>
              {singleEvent.event_address}
            </a>
          </address>

          <input
            type='text'
            id='role'
            onChange={(e) =>
              this.setState({
                role: e.target.value
              })
            }
            placeholder='add role'/>
          <button
            onClick={() => this.handleAddRoles()}>
            add role
          </button>
          <button
            onClick={()=>this.showAddEventForm()}>
            edit event
          </button>
          <ul>
            {role}
          </ul>
        </div>
        {data}
      </div>
    )
  }
}

Event.propTypes = {
  auth: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  roles: PropTypes.array.isRequired,
  createRole: PropTypes.func.isRequired,
  getAllRoles: PropTypes.func.isRequired
}

export default Event
