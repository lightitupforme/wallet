import React from 'react';

import BalanceContainer from '../containers/BalanceContainer';
import TabBar from './TabBar';

export const tabs = [
  { to: '/app/send', title: 'Send' },
  { to: '/app/addresses', title: 'Addresses' },
  { to: '/app/transactions', title: 'Transactions' },
];

const App = ({ children }) => (
  <div>
    <BalanceContainer />
    <TabBar tabs={tabs} />
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default App;
