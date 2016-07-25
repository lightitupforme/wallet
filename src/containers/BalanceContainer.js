import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Balance from '../components/Balance';
import { getBalance, getExchange } from '../reducers';
import * as actions from '../actions';

class BalanceContainer extends React.Component {
  componentDidMount() {
    this.props.getBalance();
    this.props.getExchange();

    this.interval = setInterval(() => {
      this.props.getBalance();
      this.props.getExchange();
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <Balance balance={this.props.balance} exchange={this.props.exchange} />;
  }
}

BalanceContainer.propTypes = {
  balance: React.PropTypes.number.isRequired,
  exchange: React.PropTypes.object.isRequired,
  getBalance: React.PropTypes.func.isRequired,
  getExchange: React.PropTypes.func.isRequired,
};

/* eslint-disable no-class-assign */
BalanceContainer = withRouter(connect(
  state => ({
    balance: getBalance(state),
    exchange: getExchange(state),
  }),
  actions
)(BalanceContainer));
/* eslint-enable no-class-assign */

export default BalanceContainer;
