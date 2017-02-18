import React from 'react'
import axios from 'axios'
import { browserHistory } from 'react-router';

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
      if(res.data.length) {
        browserHistory.push('/login');
      } else {
        browserHistory.push('/signup');  
      }
    })
    .catch((err) => {
      console.error(err)
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
