import React from 'react';

class ConfigurationPage extends React.Component {
  constructor(props) {
    super(props);

    this.changeSSL = this.changeSSL.bind(this);
    this.storeCredentials = this.storeCredentials.bind(this);
    this.status = this.status.bind(this);

    this.state = { ssl: props.credentials.ssl };
  }

  changeSSL(event) {
    this.setState({ ssl: event.target.checked });
  }

  storeCredentials(event) {
    event.preventDefault();

    this.props.storeCredentials({
      host: this.refs.host.value,
      port: this.refs.port.value,
      username: this.refs.username.value,
      password: this.refs.password.value,
      ssl: this.state.ssl,
    });
  }

  status() {
    if (this.props.authenticating) {
      return 'authenticating';
    }

    if (this.props.authenticated) {
      return 'reauthenticate';
    }

    return 'authenticate';
  }

  render() {
    return (
      <section className="padded-more">
        <form onSubmit={this.storeCredentials}>
          <div className="form-group">
            <label>host</label>
            <input
              type="text"
              defaultValue={this.props.credentials.host}
              placeholder="host"
              className="form-control"
              ref="host"
            />
          </div>
          <div className="form-group">
            <label>port</label>
            <input
              type="number"
              defaultValue={this.props.credentials.port}
              placeholder="port"
              className="form-control"
              ref="port"
            />
          </div>
          <div className="form-group">
            <label>username</label>
            <input
              type="text"
              defaultValue={this.props.credentials.username}
              placeholder="username"
              className="form-control"
              ref="username"
            />
          </div>
          <div className="form-group">
            <label>password</label>
            <input
              type="password"
              defaultValue={this.props.credentials.password}
              placeholder="password"
              className="form-control"
              ref="password"
            />
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                checked={this.state.ssl}
                ref="ssl"
                onChange={this.changeSSL}
              />
              SSL
            </label>
          </div>
          <div className="form-actions">
            <button
              type="submit"
              disabled={this.props.authenticating}
              className="btn btn-default"
              style={this.props.authenticating ? { opacity: 0.65, cursor: 'not-allowed' } : {}}
            >
              {this.status()}
            </button>
          </div>
        </form>
      </section>
    );
  }
}

ConfigurationPage.propTypes = {
  credentials: React.PropTypes.object.isRequired,
  authenticated: React.PropTypes.bool.isRequired,
  authenticating: React.PropTypes.bool.isRequired,
  storeCredentials: React.PropTypes.func.isRequired,
};

export default ConfigurationPage;
