import React from 'react';

import BalanceContainer from '../containers/BalanceContainer';
import TabBar from './TabBar';

export const tabs = [
  { to: '/app/send', title: 'Send' },
  { to: '/app/addresses', title: 'Addresses' },
  { to: '/app/transactions', title: 'Transactions' },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
    this.props.router.push('/');
  }

  render() {
    return (
      <div>
        <BalanceContainer />
        <button type="button" onClick={this.logout}>logout</button>
        <TabBar tabs={tabs} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  logout: React.PropTypes.func.isRequired,
  children: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired,
};

export default App;
