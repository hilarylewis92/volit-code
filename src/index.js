import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import './assets/css/index.scss'

import Root from './containers/Root'

import {browserHistory} from 'react-router'
import makeRoutes from './routes'

const routes = makeRoutes()

const mountNode = document.querySelector('#root')
ReactDOM.render(
  <Provider store={configureStore()}>
  <Root history={browserHistory}
        routes={routes} />
  </Provider>,
mountNode)
