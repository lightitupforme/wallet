import React from 'react';

class SendPage extends React.Component {
  constructor(props) {
    super(props);

    this.sendAmount = this.sendAmount.bind(this);
  }

  componentWillUnmount() {
    this.props.resetSending();
  }

  sendAmount(event) {
    event.preventDefault();

    this.props.sendAmount(
      this.refs.address.value,
      this.refs.amount.value
    );
  }

  render() {
    return (
      <section className="padded-more">
        <form onSubmit={this.sendAmount}>
          <div className="form-group">
            <label>address</label>
            <input
              type="text"
              required
              placeholder="address"
              ref="address"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>amount</label>
            <input
              type="number"
              required
              min="0.00001"
              max={this.props.balance}
              step="any"
              placeholder="amount"
              ref="amount"
              className="form-control"
            />
          </div>
          <div className="form-actions">
            <button
              type="submit"
              disabled={this.props.sending}
              className="btn btn-default"
              style={this.props.sending ? { opacity: 0.65, cursor: 'not-allowed' } : {}}
            >
              send
            </button>
            <span style={{ color: '#a94442' }}>{this.props.sendingError}</span>
          </div>
        </form>
      </section>
    );
  }
}

SendPage.propTypes = {
  balance: React.PropTypes.number.isRequired,
  sending: React.PropTypes.bool.isRequired,
  sendingError: React.PropTypes.string,
  sendAmount: React.PropTypes.func.isRequired,
  resetSending: React.PropTypes.func.isRequired,
};

export default SendPage;
