import React, { PropTypes } from 'react'
import Header               from './Header'
import axios                from 'axios'
import moment               from 'moment'

class UserEvent extends React.Component {
  constructor() {
    super()

    this.state = {
      event: null
    }
  }

  componentDidMount() {
    const { url_key } = this.props.params
    this.getEvent(url_key)
  }

  getEvent(url_key) {
    axios.get(`/api/event/${url_key}`)
      .then(res => this.setState({ event: res.data[0] }))
  }

  render() {
    const { event } = this.state
    const date = event ? moment(event.event_date).format('MMM Do YYYY') : ''
    return (
      <div>
        <Header text={event && event.event_name} />
        <section className='user-event-container'>
          <h1
            className='user-event-header'>
            {event && event.event_name}
          </h1>
          <p
            className='user-event-date'>
            {date}
          </p>
          <p className='user-event-description'>
            {event && event.event_description}
          </p>
        </section>
      </div>
    )
  }
}

UserEvent.propTypes = {
  url_key: PropTypes.string
}

export default UserEvent;
