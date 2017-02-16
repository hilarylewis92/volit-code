import React from 'react'
import ReactDOM from 'react-dom'

import './assets/css/index.scss'

import Root from './containers/Root'

import {browserHistory} from 'react-router'
import makeRoutes from './routes'

const routes = makeRoutes()

const mountNode = document.querySelector('#root')
ReactDOM.render(
  <Root history={browserHistory}
        routes={routes} />,
mountNode)
