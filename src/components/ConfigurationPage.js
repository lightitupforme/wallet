import React from 'react';

class ConfigurationPage extends React.Component {
  constructor(props) {
    super(props);

    this.getCredentials = this.getCredentials.bind(this);
    this.testCredentials = this.testCredentials.bind(this);
    this.storeCredentials = this.storeCredentials.bind(this);
  }

  getCredentials() {
    return {
      host: this.refs.host.value,
      port: this.refs.port.value,
      username: this.refs.username.value,
      password: this.refs.password.value,
      ssl: this.refs.ssl.checked,
    };
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
      <section>
        <h1>Configuration</h1>
        <form onSubmit={this.storeCredentials}>
          <input
            type="text"
            defaultValue={this.props.credentials.host}
            placeholder="host"
            ref="host"
          />
          <br />
          <input
            type="number"
            defaultValue={this.props.credentials.port}
            placeholder="port"
            ref="port"
          />
          <br />
          <input
            type="text"
            defaultValue={this.props.credentials.username}
            placeholder="username"
            ref="username"
          />
          <br />
          <input
            type="password"
            defaultValue={this.props.credentials.password}
            placeholder="password"
            ref="password"
          />
          <br />
          <input type="checkbox" checked={this.props.credentials.ssl} id="ssl" ref="ssl" />
          <label htmlFor="ssl">SSL</label>
          <br />
          <button type="button" onClick={this.testCredentials}>test</button>
          <button type="submit">store</button>
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
