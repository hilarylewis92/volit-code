import { connect } from 'react-redux'
import SideBar from '../components/SideBar'

function mapStateToProps(state, props) {
  return {
    profile: state.profile,
    events: state.events,
    auth: props.auth
  }
}

export default connect(mapStateToProps)(SideBar)
