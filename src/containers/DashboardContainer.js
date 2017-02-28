import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

function mapStateToProps(state, props) {
  return {
    profile: state.profile,
    events: state.events,
    auth: props.auth
  }
}

export default connect(mapStateToProps)(Dashboard)
