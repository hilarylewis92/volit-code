// import React from 'react'
// import { render } from 'react-dom'
// import Root from './containers/Root'
// // import configureStore from './store/configureStore'
// import { browserHistory } from 'react-router'
// // import { syncHistoryWithStore } from 'react-router-redux'
//
// import './assets/css/index.scss'
// import makeRoutes from './routes'
//
// // const store = configureStore()
// // const history = syncHistoryWithStore(browserHistory, store)
// const routes = makeRoutes()
//
//
// render(
//   <Root history={browserHistory} routes={routes} />,
//   document.getElementById('root')
// )

import React from 'react'
import ReactDOM from 'react-dom'

import './assets/css/index.scss'

import Root from './containers/Root'

import {browserHistory} from 'react-router'
import makeRoutes from './routes'

const routes = makeRoutes()

const mountNode = document.querySelector('#root');
ReactDOM.render(
  <Root history={browserHistory}
        routes={routes} />,
mountNode);
