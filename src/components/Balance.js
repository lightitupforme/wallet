import React from 'react';

import { numberToCurrency, calculateExchangeTotal } from '../helpers';


const Balance = ({ balance, exchange }) => {
  const price = numberToCurrency(exchange.price);
  const capital = numberToCurrency(calculateExchangeTotal(balance, exchange.price));

  return (
    <ul>
      <li><strong>Balance:</strong> {balance} BTC</li>
      <li><strong>Capital:</strong> {capital}</li>
      <li><strong>Price:</strong> {price}</li>
      <li><strong>Change:</strong> {exchange.change} %</li>
    </ul>
  );
};

Balance.propTypes = {
  balance: React.PropTypes.number.isRequired,
  exchange: React.PropTypes.object.isRequired,
};

export default Balance;
