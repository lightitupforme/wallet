import React from 'react';
import Clipboard from 'clipboard';

new Clipboard('.btn-cp'); // eslint-disable-line no-new

const renderAddressesList = addresses =>
  addresses.map((address, i) => (
    <li key={i} className={address.new ? 'current' : ''}>
      <span>{address.address}</span>
      &nbsp;
      <button type="button" className="btn-cp" data-clipboard-text={address.address}>copy</button>
    </li>
  ));

const AddressesList = ({ addresses }) => <ul>{renderAddressesList(addresses)}</ul>;

AddressesList.propTypes = {
  addresses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default AddressesList;
