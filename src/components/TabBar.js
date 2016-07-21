import React from 'react';
import { Link } from 'react-router';

import BalanceContainer from '../containers/BalanceContainer';

const renderTabBar = tabs => tabs.map((tab, i) =>
  <Link key={i} to={tab.to} className="nav-group-item" activeClassName="active">
    {tab.icon}
    {tab.title}
  </Link>
);

const TabBar = ({ tabs }) => (
  <div>
    <nav className="nav-group">
      <h5 className="nav-group-title">menu</h5>
      {renderTabBar(tabs)}
    </nav>
    <nav className="nav-group">
      <h5 className="nav-group-title">status</h5>
      <BalanceContainer />
    </nav>
    <nav className="nav-group">
      <h5 className="nav-group-title">tools</h5>
      <Link to="/configuration" className="nav-group-item" activeClassName="active">
        <span className="icon icon-cog" />
        configuration
      </Link>
    </nav>
  </div>
);

TabBar.propTypes = {
  tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
    to: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default TabBar;
