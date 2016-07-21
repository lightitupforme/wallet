import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import ConfigurationPageContainer from '../containers/ConfigurationPageContainer';
import SendPage from './SendPage';
import AddressesPageContainer from '../containers/AddressesPageContainer';
import TransactionsPage from './TransactionsPage';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute path="configuration" component={ConfigurationPageContainer} />
        <Route path="send" component={SendPage} />
        <Route path="addresses" component={AddressesPageContainer} />
        <Route path="transactions" component={TransactionsPage} />
        <Route path="configuration" component={ConfigurationPageContainer} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default Root;
