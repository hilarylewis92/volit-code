import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import Container from './Container'

import LoginContainer from '../containers/LoginContainer'
import EventManagerContainer from '../containers/EventManagerContainer'

import Dashboard from '../components/Dashboard'
import RoleManager from '../components/RoleManager'
import Volunteers from '../components/Volunteers'
import OrganizationLogin from '../components/OrganizationLogin'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import AuthService from '../utils/AuthService'

const auth = new AuthService('jSm9RjhcmgxhAPat3avNPZTvnIMZvFl2', 'volit.auth0.com')

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/organization' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/event-manager" />
      <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
      <Route path="/event-manager" component={EventManagerContainer} onEnter={requireAuth} />
      <Route path="/role-manager" component={RoleManager} onEnter={requireAuth} />
      <Route path="/volunteers" component={Volunteers} onEnter={requireAuth} />
      <Route path="/organization" component={OrganizationLogin} />
      <Route path="/login" component={Login} />
      <Route path="/signup/:org_name" component={SignUp} />
    </Route>
  )
}

export default makeMainRoutes
