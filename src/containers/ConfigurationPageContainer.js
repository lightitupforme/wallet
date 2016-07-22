import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../actions';
import ConfigurationPage from '../components/ConfigurationPage';
import { getCredentials, getAuthentication, getAuthenticating } from '../reducers';

const ConfigurationPageContainer = withRouter(connect(
  state => ({
    credentials: getCredentials(state),
    authenticated: getAuthentication(state),
    authenticating: getAuthenticating(state),
  }),
  actions
)(ConfigurationPage));

export default ConfigurationPageContainer;
