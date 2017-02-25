import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { adminLogin, createEvent, getAllEvents } from '../actions/index'
import Event from '../components/Event'

function mapStateToProps(state, props) {
  return {
    events: state.events,
  }
}
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getAllEvents }, dispatch)
// }

export default connect(mapStateToProps, null)(Event)
