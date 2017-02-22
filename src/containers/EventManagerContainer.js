import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { adminLogin, createEvent, getAllEvents } from '../actions/index'
import EventManager from '../components/EventManager'

function mapStateToProps(state, props) {
  return {
    profile: state.profile,
    events: state.events,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ adminLogin, createEvent, getAllEvents }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventManager)
