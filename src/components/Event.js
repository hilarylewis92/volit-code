import React, { PropTypes } from 'react'
import SideBarContainer from '../containers/SideBarContainer'
import moment from 'moment'

import EditEvent from './EditEvent'

export class Event extends React.Component {
  constructor(){
    super()
    this.state = {
      role: '',
      qty: '',
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
    const { role, qty, eventID } = this.state
    const newRole = {role, qty}
    this.props.createRole(newRole, eventID)
  }

  handleAddQty(e) {
    const { id } = e.target
    const { eventID } = this.state
    const { roles } = this.props

    const newRole = roles.find(role => {
      if(role.id === parseInt(id))
      return role.role_qty += 1
    })
    const newRoleCount = newRole.role_qty
    this.props.addRoleQty(newRoleCount, id, eventID)
  }

  handleSubtractQty(e) {
    const { id } = e.target
    const { eventID } = this.state
    const { roles } = this.props

    const newRole = roles.find(role => {
      if(role.id === parseInt(id, 10))
      if(role.role_qty > 1) {
        return role.role_qty -= 1
      } else {
        return role.role_qty
      }
    })
    const newRoleCount = newRole.role_qty
    this.props.addRoleQty(newRoleCount, id, eventID)
  }

  handleDeleteRole(e) {
    const { id } = e.target
    const { eventID } = this.state
    this.props.deleteRole(id, eventID)
  }

  showAddEventForm() {
    this.refs.editModal.showModal()
  }

  formatDate(date) {
    return moment(date).format('MMM Do YYYY')
  }

  render(){
    const { events, roles, auth, editEvent, deleteEvent } = this.props
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
      let id = role.id
      let name = role.role_name
      let qty = role.role_qty
      return (
        <li
          key={i}>
          <div>{name}</div>
          <div>{qty}</div>
          <button
            id={id}
            onClick={(e) => this.handleAddQty(e)}>
            +
          </button>
          <button
            id={id}
            onClick={(e) => this.handleSubtractQty(e)}>
            -
          </button>
          <button
            id={id}
            onClick={(e) => this.handleDeleteRole(e)}>
            x
          </button>
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
          deleteEvent={deleteEvent}
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

          <h6>Volunteers Needed</h6>

          <label
            className='modal-label'
            htmlFor='role'>
            Volunteer Role
          </label>
          <input
            type='text'
            id='role'
            onChange={(e) => this.setState({ role: e.target.value })}
          />

          <label
            className='modal-label'
            htmlFor='qty'>
            Qty
          </label>
          <input
            type='number'
            id='qty'
            onChange={(e) =>this.setState({ qty: e.target.value })}
          />

          <button
            onClick={() => this.handleAddRoles()}>
            Add Role
          </button>

          <button
            onClick={() => this.showAddEventForm()}>
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
