import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import AddressesList from '../components/AddressesList';
import { getAddresses } from '../reducers';
import * as actions from '../actions';

class AddressesListContainer extends React.Component {
  componentDidMount() {
    this.props.getAddresses();
  }

  render() {
    return <AddressesList addresses={this.props.addresses} />;
  }
}

AddressesListContainer.propTypes = {
  addresses: React.PropTypes.array.isRequired,
  getAddresses: React.PropTypes.func.isRequired,
};

/* eslint-disable no-class-assign */
AddressesListContainer = withRouter(connect(
  state => ({
    addresses: getAddresses(state),
  }),
  actions
)(AddressesListContainer));
/* eslint-enable no-class-assign */

export default AddressesListContainer;
