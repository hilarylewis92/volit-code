import React, { PropTypes as T } from 'react'
import AuthService from '../../utils/AuthService'

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
      <div>
        <form className='login-form'>
          <header>
            <h2>Welcome to Volit!</h2>
            <p>The simplest way to schedule your team of volunteers</p>
          </header>
          <section>
            <p>Enter your email and organization name to create an account</p>
            <label htmlFor='email'>Your email</label>
            <input type='text' id='email' placeholder='example@domain.com'/>
            <label htmlFor='organization'>Organization Name</label>
            <input type='text' id='organization' placeholder='Habitat for Humanity'/>
          </section>
        </form>
        <button onClick={auth.login.bind(this)}>Create Account</button>
      </div>
    )
  }
}

export default Login
