import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import TransactionList from '../components/TransactionList';
import { getTransactions } from '../reducers';
import * as actions from '../actions';

class TransactionListContainer extends React.Component {
  componentDidMount() {
    this.props.getTransactions();

    this.interval = setInterval(() => {
      this.props.getTransactions();
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <TransactionList transactions={this.props.transactions} />;
  }
}

TransactionListContainer.propTypes = {
  transactions: React.PropTypes.array.isRequired,
  getTransactions: React.PropTypes.func.isRequired,
};

/* eslint-disable no-class-assign */
TransactionListContainer = withRouter(connect(
  state => ({
    transactions: getTransactions(state),
  }),
  actions
)(TransactionListContainer));
/* eslint-enable no-class-assign */

export default TransactionListContainer;
