import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import Container from './Container'

import Login from '../components/Login'

import Dashboard from '../components/Dashboard'
import EventManager from '../components/EventManager'
import RoleManager from '../components/RoleManager'
import Volunteers from '../components/Volunteers'

import AuthService from '../utils/AuthService'

const auth = new AuthService('jSm9RjhcmgxhAPat3avNPZTvnIMZvFl2', 'volit.auth0.com')

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/event-manager" />
      <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
      <Route path="/event-manager" component={EventManager} onEnter={requireAuth} />
      <Route path="/role-manager" component={RoleManager} onEnter={requireAuth} />
      <Route path="/volunteers" component={Volunteers} onEnter={requireAuth} />
      <Route path="/login" component={Login} />
    </Route>
  )
}

export default makeMainRoutes
