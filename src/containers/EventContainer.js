import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createRole } from '../actions/index'
import Event from '../components/Event'

function mapStateToProps(state, props) {
  return {
    events: state.events,
    roles: state.roles,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createRole }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)
