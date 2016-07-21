import React from 'react';

import AddressesListContainer from '../containers/AddressesListContainer';

const AddressesPage = ({ addAddress }) => (
  <section>
    <header className="toolbar toolbar-header">
      <div className="toolbar-actions">
        <button type="button" className="btn btn-default" onClick={() => addAddress()} >
          <span className="icon icon-plus-circled" />
          &nbsp;new address
        </button>
      </div>
    </header>
    <AddressesListContainer />
  </section>
);

AddressesPage.propTypes = {
  addAddress: React.PropTypes.func.isRequired,
};

export default AddressesPage;
