// import React, { Component, PropTypes } from 'react'
// import { Provider } from 'react-redux'
// import { Router } from 'react-router'
// import routes from '../views/Main/routes'
//
// class Root extends Component {
//   render() {
//     const { store, history } = this.props
//     // const routes = makeRoutes()
//
//     return (
//       <div>
//         <Provider store={store}>
//           <div>
//             <Router history={history} routes={routes} />
//           </div>
//         </Provider>
//       </div>
//     )
//   }
// }
//
// Root.displayName = 'Root'
//
// Root.propTypes = {
//   history: PropTypes.object.isRequired,
//   store: PropTypes.object.isRequired
// }
//
// export default Root

import React, { PropTypes } from 'react'
import { Router } from 'react-router'

class Root extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  }

  get content() {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history} />
    )
  }

  render () {
     return (
       <div style={{ height: '100%' }}>
         {this.content}
       </div>
     )
   }
}

export default Root
