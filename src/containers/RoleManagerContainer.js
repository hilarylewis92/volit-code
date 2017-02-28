import { connect } from 'react-redux'
import RoleManager from '../components/RoleManager'

function mapStateToProps(state, props) {
  return {
    auth: props.auth,
    profile: state.profile,
    events: state.events
  }
}

export default connect(mapStateToProps)(RoleManager)
