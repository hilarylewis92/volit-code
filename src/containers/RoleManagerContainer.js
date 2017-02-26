import { connect } from 'react-redux'
import RoleManager from '../components/RoleManager'

function mapStateToProps(state, props) {
  return {
    auth: props.auth
  }
}

export default connect(mapStateToProps)(RoleManager)
