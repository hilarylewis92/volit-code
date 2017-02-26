import React from 'react'
import {Route, IndexRedirect} from 'react-router'

import Container from './Container'

import EventManagerContainer from '../containers/EventManagerContainer'
import DashboardContainer from '../containers/DashboardContainer'
import RoleManagerContainer from '../containers/RoleManagerContainer'
import VolunteersContainer from '../containers/VolunteersContainer'
import EventContainer from '../containers/EventContainer'

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
      <Route path="/dashboard" component={DashboardContainer} onEnter={requireAuth} />
      <Route path="/event-manager" component={EventManagerContainer} onEnter={requireAuth} />
      <Route path="/event-manager/:event_id" component={EventContainer} onEnter={requireAuth}/>
      <Route path="/role-manager" component={RoleManagerContainer} onEnter={requireAuth} />
      <Route path="/volunteers" component={VolunteersContainer} onEnter={requireAuth} />
      <Route path="/organization" component={OrganizationLogin} />
      <Route path="/login/:org_name" component={Login} />
      <Route path="/signup/:org_name" component={SignUp} />
    </Route>
  )
}

export default makeMainRoutes
