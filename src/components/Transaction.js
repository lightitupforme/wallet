import React from 'react';

import { timestampToDateTime } from '../helpers';

const Transaction = ({ transaction }) => (
  <tr>
    <td>{timestampToDateTime(transaction.time)}</td>
    <td>{transaction.category}</td>
    <td>{transaction.amount}</td>
    <td>{transaction.address}</td>
    <td>{transaction.confirmations}</td>
    <td className="selectable-text">{transaction.txid}</td>
  </tr>
);

Transaction.propTypes = {
  transaction: React.PropTypes.object.isRequired,
};

export default Transaction;
