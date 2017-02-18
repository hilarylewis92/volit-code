import React from 'react'
import axios from 'axios'

export class OrganizationLogin extends React.Component {
  constructor() {
    super()
    this.state = {
      organization: ''
    }
  }

  updateOrganizationName(e) {
    e.preventDefault()
    this.setState({
      organization: e.target.value
    })
  }

  checkOrganizationName(e) {
    e.preventDefault()
    const name = this.state.organization
    axios.get(`/api/checkorg/${name}`)
    .then((res) => {
      console.log(res)
    })
  }

  render(){
    return (
      <div>
        <form>
          <label
            htmlFor='organization'>
            Organization name
          </label>
          <input
            type='text'
            id='organization'
            placeholder='Habitat for Humanity'
            onChange={(e) => this.updateOrganizationName(e)}/>
          <button
            type='submit'
            onClick={(e) => this.checkOrganizationName(e)}>
            Continue
          </button>
        </form>
      </div>
    )
  }
}

export default OrganizationLogin
