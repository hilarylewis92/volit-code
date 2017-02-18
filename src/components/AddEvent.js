import React, { Component } from 'react'
import Modal from 'boron/DropModal'

export default class AddEvent extends Component {

  showModal() {
    this.refs.modal.show()
  }

  hideModal(){
    this.refs.modal.hide()
  }

  saveEvent() {
    //save to database here
    this.hideModal()
  }

  render() {
    return (
      <div>
        <Modal
          className='modal-card'
          ref="modal">
          <form>
            <h4>Create Event</h4>

            <label
              htmlFor='name'>
              Event name
            </label>
            <input
              type='text'
              id='name'
              placeholder='name'/>

            <label
              htmlFor='description'>
              Event description
            </label>
            <textarea
              type='text'
              id='description'
              placeholder='description'>
            </textarea>

            <label
              htmlFor='date'>
              Event date
            </label>
            <input
              type='date'
              id='date'
              placeholder='date'/>

            <label
              htmlFor='address'>
              Event address
            </label>
            <input
              type='text'
              id='address'
              placeholder='address'/>

            <button
              onClick={()=>this.saveEvent()}>
              Save event
            </button>
          </form>
        </Modal>
      </div>
    )
  }
}
