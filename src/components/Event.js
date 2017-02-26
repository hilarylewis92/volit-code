import React, { PropTypes as T } from 'react'
import SideBarContainer from '../containers/SideBarContainer'
import moment from 'moment'

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

  formatDate(date) {
    return moment(date).format('MMM Do YYYY')
  }

  render(){
    const { events, auth } = this.props
    const eventID = this.props.params.event_id

    const singleEvent = events.find(event => {
      if (event.id === parseInt(eventID))
        return event
    })

    const date = this.formatDate(singleEvent.event_date)

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
            onClick={(e) => this.handleAddRoles(e)}>
            add role
          </button>
        </div>
      </div>
    )
  }
}

export default Event
