import React from 'react';

import AddressesListContainer from '../containers/AddressesListContainer';

const AddressesPage = ({ addAddress }) => (
  <section>
    <AddressesListContainer addAddress={addAddress} />
  </section>
);

AddressesPage.propTypes = {
  addAddress: React.PropTypes.func.isRequired,
};

export default AddressesPage;
