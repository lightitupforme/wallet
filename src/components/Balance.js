import React from 'react';

import { numberToCurrency } from '../helpers';

const Balance = ({ balance, exchange }) =>
  <span>{balance} BTC entsprechen aktuell {numberToCurrency(exchange)} EUR</span>;

Balance.propTypes = {
  balance: React.PropTypes.number.isRequired,
  exchange: React.PropTypes.number.isRequired,
};

export default Balance;
