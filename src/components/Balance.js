import React from 'react';

import { numberToCurrency, calculateExchangeTotal } from '../helpers';


const Balance = ({ balance, exchange }) => {
  const price = numberToCurrency(exchange.price);
  const capital = numberToCurrency(calculateExchangeTotal(balance, exchange.price));

  return (
    <div>
      <span className="nav-group-item">
        <span className="icon icon-database"></span>
        {balance.toFixed(5)} BTC
      </span>
      <span className="nav-group-item">
        <span className="icon icon-chart-pie"></span>
        {capital}
      </span>
      <span className="nav-group-item">
        <span className="icon icon-cloud"></span>
        {price}
      </span>
      <span className="nav-group-item">
        <span className="icon icon-chart-line"></span>
        {exchange.change} %
      </span>
    </div>
  );
};

Balance.propTypes = {
  balance: React.PropTypes.number.isRequired,
  exchange: React.PropTypes.object.isRequired,
};

export default Balance;
