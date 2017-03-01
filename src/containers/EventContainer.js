import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createRole, getAllRoles, editEvent, deleteEvent, deleteRole, addRoleQty} from '../actions/index'
import Event from '../components/Event'

function mapStateToProps(state, props) {
  return {
    events: state.events,
    profile: state.profile,
    roles: state.roles,
    auth: props.auth
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createRole, getAllRoles, editEvent, deleteEvent, deleteRole, addRoleQty }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)
