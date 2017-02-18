// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { adminLogin } from '../actions/index';
import EventManager from '../components/EventManager';

function mapStateToProps(state, props) {
  return {
    profile: state.profile,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ adminLogin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventManager);
