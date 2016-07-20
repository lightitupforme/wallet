import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../actions';
import ConfigurationPage from '../components/ConfigurationPage';
import { getUsername, getPassword } from '../reducers';

const ConfigurationPageContainer = withRouter(connect(
  state => ({
    username: getUsername(state),
    password: getPassword(state),
  }),
  actions
)(ConfigurationPage));

export default ConfigurationPageContainer;
