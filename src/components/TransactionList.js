import React from 'react';

const renderTransactionList = transactions => transactions.map((transaction, i) => (
  <tr key={i}>
    <td>{transaction.category}</td>
    <td>{transaction.amount}</td>
    <td>{transaction.address}</td>
    <td>{transaction.confirmations}</td>
  </tr>
));

const TransactionList = ({ transactions }) => (
  <table>
    <thead>
      <tr>
        <th></th>
        <th>amount</th>
        <th>address</th>
        <th>confirmations</th>
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
