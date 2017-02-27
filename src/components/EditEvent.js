import React, { PropTypes } from 'react'
import Modal from 'boron/DropModal'

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
    this.refs.modal.show()
  }

  hideModal(){
    this.refs.modal.hide()
  }

  handleEventSubmit(e) {
    e.preventDefault()
    // const { name, description, date, address } = this.state
    // const { orgID } = this.props
    // const newEvent = { name, description, date, address }
    // this.props.createEvent(newEvent, orgID)
    // this.hideModal()
  }

  handleDeleteEvent(e) {
    e.preventDefault()
    if(confirm('Are you sure you want to delete this event?')) {
    }
  }

  render() {
    const { id, event_name, event_date, event_description, event_address } = this.props.event

    return (
      <Modal
        className='modal'
        ref="modal">
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
            value={event_name}
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
            value={event_description}
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
              value={event_date}
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
            onClick={(e) => this.handleEventSubmit(e)}>
            Save changes
          </button>
        </form>
      </Modal>
    )
  }
}


export default EditEvent
