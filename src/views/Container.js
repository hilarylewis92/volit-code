import React, { PropTypes as T } from 'react'

export class Container extends React.Component {
  static contextTypes = {
    router: T.object,
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth
      })
    }

    return (
      <div>
        <div className="wrapper">{children}</div>
      </div>
    )
  }
}

Container.propTypes = {
 children: React.PropTypes.node,
 route: React.PropTypes.object,
 params: React.PropTypes.object
}

export default Container
