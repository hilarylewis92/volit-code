import React, { Component } from 'react'
import Modal from 'boron/DropModal'
import axios from 'axios'

export default class AddEvent extends Component {
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
    const { name, description, date, address } = this.state
    const { orgID } = this.props
    var newEvent = { name, description, date, address }
    this.props.createEvent(newEvent, orgID)
    this.hideModal()
  }

  render() {
    return (
      <Modal
        className='modal'
        ref="modal">
        <form
          onSubmit={this.props.createEvent}>
          <h2 className='modal-title'>Create Event</h2>

          <label
            className='modal-label'
            htmlFor='name'>
            Event name
          </label>
          <input
            className='modal-input'
            type='text'
            id='name'
            onChange={(e) =>
              this.setState({
                name: e.target.value
              })
            }
            placeholder='name'/>

          <label
            className='modal-label'
            htmlFor='description'>
            Event description
          </label>
          <textarea
            className='modal-input modal-text-area'
            type='text'
            id='description'
            onChange={(e) =>
              this.setState({
                description: e.target.value
              })
            }
            placeholder='description'>
          </textarea>

          <label
            className='modal-label'
            htmlFor='date'>
            Event date
          </label>
          <input
            type='date'
            id='date'
            onChange={(e) =>
              this.setState({
                date: e.target.value
              })
            }
            placeholder='date'/>

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
            }
            placeholder='address'/>

          <button
            onClick={(e) => this.handleEventSubmit(e)}>
            Save event
          </button>
        </form>
      </Modal>
    )
  }
}
