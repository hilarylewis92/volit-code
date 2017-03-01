import React, { PropTypes } from 'react';
import axios from 'axios'
import moment from 'moment'

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
    return (
      <section>
        <h1>{event && event.event_name}</h1>
        <p>{event && event.event_date}</p>
      </section>
    )
  }
}

UserEvent.propTypes = {
  url_key: PropTypes.string
}

export default UserEvent;
