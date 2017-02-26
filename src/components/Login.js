import React, { PropTypes } from 'react'
import AuthService from '../utils/AuthService'

class Login extends React.Component {
  static contextTypes = {
    router: PropTypes.object
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
                src={require('../assets/icons/icon-gradient-bg.svg')} />
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
                Email
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

Login.propTypes = {
  auth: PropTypes.instanceOf(AuthService),
}

export default Login
