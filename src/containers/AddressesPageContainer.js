import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../actions';
import AddressesPage from '../components/AddressesPage';

const AddressesPageContainer = withRouter(connect(
  () => ({}),
  actions
)(AddressesPage));

export default AddressesPageContainer;
