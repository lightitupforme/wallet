import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import AddressesList from '../components/AddressesList';
import { getAddresses } from '../reducers';

const AddressesListContainer = withRouter(connect(
  state => ({
    addresses: getAddresses(state),
  }),
  {}
)(AddressesList));

export default AddressesListContainer;
