import React from 'react';

import Transaction from './Transaction';

const renderTransactionList = transactions =>
  transactions.map((transaction, i) => <Transaction key={i} transaction={transaction} />);

const TransactionList = ({ transactions }) => (
  <table className="table-striped">
    <thead>
      <tr>
        <th>date</th>
        <th>type</th>
        <th>amount</th>
        <th>address</th>
        <th>confirmations</th>
        <th>id</th>
      </tr>
    </thead>
    <tbody>
      {renderTransactionList(transactions.reverse())}
    </tbody>
  </table>
);

TransactionList.propTypes = {
  transactions: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default TransactionList;
