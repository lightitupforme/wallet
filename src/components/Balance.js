import React from 'react';

const Balance = ({ balance }) => <strong>{balance}</strong>;

Balance.propTypes = {
  balance: React.PropTypes.number.isRequired,
};

export default Balance;
