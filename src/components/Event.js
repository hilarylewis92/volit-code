import React, { PropTypes as T } from 'react'

import SideBar from './SideBar'

export class Event extends React.Component {
  componentDidMount() {
    debugger
    // const { orgID } = this.props
    // this.props.getAllEvents(orgID)
  }

  render(){
    // const {events, orgID} = this.props
    // var event = events.map((event, i)=> {
    //   return (
    //   <li className='event-list-item' key={i}>
    //     <div>{event.event_name}</div>
    //     <div>{event.event_date}</div>
    //     <div>{event.event_description}</div>
    //     <div>{event.event_address}</div>
    //   </li>
    //   )
    // })

    return (
      <div className='event-container'>
        <SideBar />
        In event 
      </div>
    )
  }
}

export default Event
