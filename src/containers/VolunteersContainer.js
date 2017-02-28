import { connect } from 'react-redux'
import Volunteers from '../components/Volunteers'

function mapStateToProps(state, props) {
  return {
    auth: props.auth,
    profile: state.profile,
    events: state.events
  }
}

export default connect(mapStateToProps)(Volunteers)
