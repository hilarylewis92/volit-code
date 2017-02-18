import React, { Component } from 'react'
import Modal from 'boron/DropModal'

export default class AddEvent extends Component {

  showModal() {
    this.refs.modal.show()
  }

  hideModal(){
    this.refs.modal.hide()
  }

  render() {
    return (
      <div>
        <Modal
          className='modal-card'
          ref="modal">
          <form>
            <h4>Create Event</h4>
            <input placeholder='Event name'/>
          </form>
        </Modal>
      </div>
    )
  }
}
