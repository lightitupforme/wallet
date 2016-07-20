import React from 'react';

import AddressesListContainer from '../containers/AddressesListContainer';

const AddressesPage = ({ addAddress }) => (
  <section>
    <h1>Addresses</h1>
    <AddressesListContainer />
    <button type="button" onClick={() => addAddress()}>+</button>
  </section>
);

AddressesPage.propTypes = {
  addAddress: React.PropTypes.func.isRequired,
};

export default AddressesPage;
