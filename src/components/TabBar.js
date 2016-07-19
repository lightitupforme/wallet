import React from 'react';
import { Link } from 'react-router';

const renderTabBar = tabs => tabs.map((tab, i) => <Link key={i} to={tab.to}>{tab.title}</Link>);

const TabBar = ({ tabs }) => <ul>{renderTabBar(tabs)}</ul>;

TabBar.propTypes = {
  tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
    to: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default TabBar;
