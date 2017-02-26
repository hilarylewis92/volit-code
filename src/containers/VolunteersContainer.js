import { connect } from 'react-redux'
import Volunteers from '../components/Volunteers'

function mapStateToProps(state, props) {
  return {
    auth: props.auth
  }
}

export default connect(mapStateToProps)(Volunteers)
