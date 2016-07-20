import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Balance from '../components/Balance';
import { getBalance } from '../reducers';
import * as actions from '../actions';

class BalanceContainer extends React.Component {
  componentDidMount() {
    this.props.getBalance();
  }

  render() {
    return <Balance balance={this.props.balance} />;
  }
}

BalanceContainer.propTypes = {
  balance: React.PropTypes.number.isRequired,
  getBalance: React.PropTypes.func.isRequired,
};

/* eslint-disable no-class-assign */
BalanceContainer = withRouter(connect(
  state => ({
    balance: getBalance(state),
  }),
  actions
)(BalanceContainer));
/* eslint-enable no-class-assign */

export default BalanceContainer;
