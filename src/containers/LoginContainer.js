import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { adminLogin } from '../actions/index'
import Login from '../components/Login'

function mapStateToProps(state, props) {
  return {
    profile: state.profile,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ adminLogin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
