import React from 'react'
import { IndexRoute, Route } from 'react-router'
import Container from './Container'
import AuthService from '../../utils/AuthService'

const auth = new AuthService('jSm9RjhcmgxhAPat3avNPZTvnIMZvFl2', 'volit.auth0.com');

export default (
  <Route path="/" component={Container} auth={auth}/>
)
