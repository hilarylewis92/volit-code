import React, { PropTypes as T } from 'react'

import SideBar from './SideBar'

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
  }

  handleAddRoles(e) {
    e.preventDefault()
    const { role, eventID } = this.state
    this.props.createRole(role, eventID)
  }

  render(){
    const { events } = this.props
    const eventID = this.props.params.event_id

    const singleEvent = events.find(event => {
      if (event.id === parseInt(eventID))
        return event
    })

    return (
      <div>
        <SideBar />
        <div className="event-manager-container">
          <div>
            {singleEvent.event_name}
          </div>
          <div>
            {singleEvent.event_date}
          </div>
          <div>
            {singleEvent.event_description}
          </div>
          <div>
            {singleEvent.event_address}
          </div>

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
            onClick={(e) => this.handleAddRoles(e)}>
            add roles
          </button>
        </div>
      </div>
    )
  }
}

export default Event
