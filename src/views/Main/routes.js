import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import Container from './Container'
import Home from './Home'
import Login from './Login'
import AuthService from '../../utils/AuthService'

const auth = new AuthService('jSm9RjhcmgxhAPat3avNPZTvnIMZvFl2', 'volit.auth0.com')

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={Home} onEnter={requireAuth} />
      <Route path="/login" component={Login} />
    </Route>
  )
}

export default makeMainRoutes
