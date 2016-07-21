import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import App from '../components/App';
import * as actions from '../actions';

const AppContainer = withRouter(connect(
  () => ({}),
  actions
)(App));

export default AppContainer;
