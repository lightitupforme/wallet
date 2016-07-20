import React from 'react';

class ConfigurationPage extends React.Component {
  constructor(props) {
    super(props);

    this.storeCredentials = this.storeCredentials.bind(this);
  }

  storeCredentials(event) {
    event.preventDefault();

    this.props.storeCredentials(this.refs.username.value, this.refs.password.value);
  }

  render() {
    return (
      <section>
        <h1>Configuration</h1>
        <form onSubmit={this.storeCredentials}>
          <input
            type="text"
            defaultValue={this.props.username}
            placeholder="username"
            ref="username"
          />
          <input
            type="password"
            defaultValue={this.props.password}
            placeholder="password"
            ref="password"
          />
          <button type="submit">store</button>
        </form>
      </section>
    );
  }
}

ConfigurationPage.propTypes = {
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  storeCredentials: React.PropTypes.func.isRequired,
};

export default ConfigurationPage;
