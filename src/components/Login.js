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

  componentDidMount() {
    const org_name = this.props.params.org_name
    localStorage.setItem('org_name', org_name)
  }

  render() {
    const { auth } = this.props
    return (
      <div className='login'>
        <div className='login-form-container'>
          <form className='login-form'>
            <header className='login-form-header'>
              <img
                className='login-form-header-image'
                role="presentation"
                src={require('../assets/icons/icon-gradient-bg.svg')}/>
              <h2
                className='login-form-header-title'>
                Welcome back.
              </h2>
            </header>

            <section>
              <p>
                Sign into your account using your registered email address.
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
            className="create-account-button"
            type='submit'
            onClick={auth.login.bind(this)}>
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default Login
