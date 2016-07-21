import React from 'react';

class ConfigurationPage extends React.Component {
  constructor(props) {
    super(props);

    this.getCredentials = this.getCredentials.bind(this);
    this.changeSSL = this.changeSSL.bind(this);
    this.testCredentials = this.testCredentials.bind(this);
    this.storeCredentials = this.storeCredentials.bind(this);

    this.state = { ssl: props.credentials.ssl };
  }

  getCredentials() {
    return {
      host: this.refs.host.value,
      port: this.refs.port.value,
      username: this.refs.username.value,
      password: this.refs.password.value,
      ssl: this.state.ssl,
    };
  }

  changeSSL(event) {
    this.setState({ ssl: event.target.checked });
  }

  testCredentials() {
    this.props.testCredentials(this.getCredentials());
  }

  storeCredentials(event) {
    event.preventDefault();

    if (this.props.authenticated) {
      this.props.storeCredentials(this.getCredentials());
      this.props.router.push('/app');
    }
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
              type="button"
              className="btn btn-default"
              onClick={this.testCredentials}
            >
              test connection
            </button>
            <button
              type="submit"
              disabled={!this.props.authenticated}
              className="btn btn-primary"
            >
              login
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
  testCredentials: React.PropTypes.func.isRequired,
  storeCredentials: React.PropTypes.func.isRequired,
  router: React.PropTypes.object.isRequired,
};

export default ConfigurationPage;
