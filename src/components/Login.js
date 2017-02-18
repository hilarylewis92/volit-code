import React, { PropTypes as T } from 'react'
import AuthService from '../utils/AuthService'

export class Login extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
      <div className='Login'>
        <form className='login-form'>
          <header className='login-form-header'>
            <img
              className='login-form-header-image'
              src={require('../assets/icons/icon.png')}/>
            <h2
              className='login-form-header-title'>
              Welcome to Volit!
            </h2>
            <p
              className='login-form-header-branding'>
              The simplest way to schedule your team of volunteers
            </p>
          </header>
          <section>
            <p>
              Enter your email and organization name to create an account
            </p>
            <label
              htmlFor='email'>
              Your email
            </label>
            <input
              type='text'
              id='email'
              placeholder='example@domain.com'/>
          </section>
      </form>
      <button
        type='submit'
        onClick={auth.login.bind(this)}>
        Create Account
      </button>
      </div>
    )
  }
}

export default Login
