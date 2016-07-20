import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Balance from '../components/Balance';
import { getBalance } from '../reducers';

const BalanceContainer = withRouter(connect(
  state => ({
    balance: getBalance(state),
  }),
  {}
)(Balance));

export default BalanceContainer;
