import React, { PropTypes as T } from 'react'
import AuthService from '../utils/AuthService'

export class SignUp extends React.Component {
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
      <div className="login">
        <div className="login-form-container">
          <form className='login-form'>
            <header className="login-form-header">
              <img
                className='login-form-header-image'
                role="presentation"
                src={require('../assets/icons/icon-gradient-bg.svg')} />
              <h2 className="login-form-header-title">
                Sign up for Volit.
              </h2>
            </header>
            <section>
              <p>
                Enter your email and organization name to create an account.
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
            type='submit'
            onClick={auth.login.bind(this)}>
            Create Account
          </button>
        </div>
      </div>
    )
  }
}

export default SignUp
