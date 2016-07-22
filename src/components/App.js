import React from 'react';

import TabBar from './TabBar';

export const tabs = [
  { to: '/send', icon: <span className="icon icon-paper-plane" />, title: 'transfer' },
  { to: '/addresses', icon: <span className="icon icon-book-open" />, title: 'addresses' },
  { to: '/transactions', icon: <span className="icon icon-switch" />, title: 'transactions' },
];

const App = ({ children }) => (
  <div className="window">
    <div className="window-content">
      <div className="pane-group">
        <div className="pane-sm sidebar">
          <TabBar tabs={tabs} />
        </div>
        <div className="pane">
          {children}
        </div>
      </div>
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default App;
