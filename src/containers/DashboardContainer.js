import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

function mapStateToProps(state, props) {
  return {
    auth: props.auth
  }
}

export default connect(mapStateToProps)(Dashboard)
