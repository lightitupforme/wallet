import React from 'react';

const renderAddressesList = addresses =>
  addresses.map((address, i) => (
    <li key={i} className="list-group-item">
      <div className="media-body">
        <p className="selectable-text">{address.address}</p>
      </div>
    </li>
  ));

const AddressesList = ({ addresses }) =>
  <ul className="list-group">{renderAddressesList(addresses)}</ul>;

AddressesList.propTypes = {
  addresses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default AddressesList;
