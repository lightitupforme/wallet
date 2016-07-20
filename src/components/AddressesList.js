import React from 'react';

const renderAddressesList = addresses =>
  addresses.map((address, i) => <li key={i}>{address.address}</li>);

const AddressesList = ({ addresses }) => <ul>{renderAddressesList(addresses)}</ul>;

AddressesList.propTypes = {
  addresses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default AddressesList;
