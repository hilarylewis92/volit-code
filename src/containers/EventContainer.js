import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createRole, getAllRoles, editEvent, deleteEvent, deleteRole} from '../actions/index'
import Event from '../components/Event'

function mapStateToProps(state, props) {
  return {
    events: state.events,
    roles: state.roles,
    auth: props.auth
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createRole, getAllRoles, editEvent, deleteEvent, deleteRole }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)
