import React, { PropTypes } from 'react'
import Modal from 'boron/DropModal'
import moment from 'moment'
import { browserHistory } from 'react-router'

class EditEvent extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      description: '',
      date: '',
      address: '',
    }
  }

  showModal() {
    this.refs.editModal.show()
  }

  hideModal(){
    this.refs.editModal.hide()
  }

  componentDidMount() {
    const { id, event_name, event_date, event_description, event_address, organization_id } = this.props.event

    this.setState({
      id: id,
      orgID: organization_id,
      name: event_name || '',
      description: event_description || '',
      date: event_date || '',
      address: event_address || '',
    })
  }

  handleEventSubmit(e) {
    e.preventDefault()
    const { id, name, description, date, address, orgID } = this.state
    const newEvent = { id, name, description, date, address }

    this.props.editEvent(newEvent, orgID)
    this.hideModal()
  }

  handleDeleteEvent(e) {
    e.preventDefault()
    const { id, orgID } = this.state

    if(confirm('Are you sure you want to delete this event?')) {
      this.props.deleteEvent(id, orgID)
      location.replace(`${window.location.origin}/event-manager`)
    }
  }

  render() {
    const { name, description, date, address } = this.state
    
    return (
      <Modal
        className='modal'
        ref="editModal">
        <form
          >
          <h2 className='modal-title'>Edit Event</h2>

          <label
            className='modal-label'
            htmlFor='name'>
            Event name
          </label>
          <input
            className='modal-input'
            type='text'
            id='name'
            value={name}
            onChange={(e) =>
              this.setState({
                name: e.target.value
              })
            }/>

          <label
            className='modal-label'
            htmlFor='description'>
            Event description
          </label>
          <textarea
            className='modal-input modal-text-area'
            type='text'
            id='description'
            value={description}
            onChange={(e) =>
              this.setState({
                description: e.target.value
              })
            }>
          </textarea>

          <div className='modal-split-input modal-date'>
            <label
              className='modal-label'
              htmlFor='date'>
              Event date
            </label>
            <input
              type='date'
              id='date'
              value={date}
              onChange={(e) =>
                this.setState({
                  date: e.target.value
                })
              }/>
          </div>

          <div className='modal-split-input modal-address'>
            <label
              className='modal-label'
              htmlFor='address'>
              Event address
            </label>
            <input
              type='text'
              id='address'
              value={address}
              onChange={(e) =>
                this.setState({
                  address: e.target.value
                })
              }/>
            </div>
          <button
            onClick={(e) => this.handleDeleteEvent(e)}>
            Delete event
          </button>

          <button
            disabled={name && description && date && address ? false : true}
            onClick={(e) => this.handleEventSubmit(e)}>
            Save changes
          </button>
        </form>
      </Modal>
    )
  }
}


export default EditEvent
