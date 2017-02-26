import React from 'react'
import axios from 'axios'
import { browserHistory } from 'react-router'

export class OrganizationLogin extends React.Component {
  constructor() {
    super()
    this.state = {
      organization: '',
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
        browserHistory.push(`/login/${name}`)
      } else {
        browserHistory.push(`/signup/${name}`)
      }
    })
    .catch((err) => {
      console.error('ERROR: in checkOrganizationName function ', err)
    })
  }

  render(){
    return (
      <div className="login">
        <div className="login-form-container">
          <form className="login-form">
            <header className="login-form-header">
            <img
              className='login-form-header-image'
              role="presentation"
              src={require('../assets/icons/icon-gradient-bg.svg')}/>
              <h2>
                Welcome to Volit.
              </h2>
              <p
                className='login-form-header-branding'>
                The simplest way to schedule your team of volunteers.
              </p>
            </header>

            <section>
              <p>
              Enter your organization name to get started.
              </p>
              <label
                htmlFor='organization'>
                Organization name
              </label>
              <input
                type='text'
                id='organization'
                placeholder='Habitat for Humanity'
                onChange={(e) => this.updateOrganizationName(e)}
              />
              <button
                type='submit'
                onClick={(e) => this.checkOrganizationName(e)}>
                Continue
              </button>
            </section>
          </form>
         </div>
      </div>
    )
  }
}

export default OrganizationLogin
