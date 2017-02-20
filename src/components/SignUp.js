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
    console.log('auth', auth)
    console.log('state from redux', this.state, this.props);
    return (
      <div>
        <form className='login-form'>
          <header>
            <h2>
              SignUp Your organization
            </h2>
            <p>
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

export default SignUp
