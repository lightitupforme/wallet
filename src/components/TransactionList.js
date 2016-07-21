import React from 'react';

export const timestampToDateTime = timestamp => {
  const locale = new Intl.DateTimeFormat('de-DE', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return locale.format(new Date(timestamp * 1000));
};

const renderTransactionList = transactions => transactions.map((transaction, i) => (
  <tr key={i}>
    <td>{timestampToDateTime(transaction.time)}</td>
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
        <th>date</th>
        <th>type</th>
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
