import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import SendPage from '../components/SendPage';
import { getBalance, isSending, getSuccessMessage, getSendingError } from '../reducers';
import * as actions from '../actions';

class SendPageContainer extends React.Component {
  componentDidMount() {
    this.props.getBalance();
  }

  render() {
    return (
      <SendPage
        balance={this.props.balance}
        sending={this.props.sending}
        sendingSuccess={this.props.sendingSuccess}
        sendingError={this.props.sendingError}
        sendAmount={this.props.sendAmount}
        resetSending={this.props.resetSending}
      />
    );
  }
}

SendPageContainer.propTypes = {
  balance: React.PropTypes.number.isRequired,
  sending: React.PropTypes.bool.isRequired,
  sendingSuccess: React.PropTypes.string,
  sendingError: React.PropTypes.string,
  getBalance: React.PropTypes.func.isRequired,
  sendAmount: React.PropTypes.func.isRequired,
  resetSending: React.PropTypes.func.isRequired,
};

/* eslint-disable no-class-assign */
SendPageContainer = withRouter(connect(
  state => ({
    balance: getBalance(state),
    sending: isSending(state),
    sendingSuccess: getSuccessMessage(state),
    sendingError: getSendingError(state),
  }),
  actions
)(SendPageContainer));
/* eslint-enable no-class-assign */

export default SendPageContainer;
