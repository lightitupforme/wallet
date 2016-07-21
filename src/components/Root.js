import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AppContainer from '../containers/AppContainer';
import ConfigurationPageContainer from '../containers/ConfigurationPageContainer';
import SendPage from './SendPage';
import AddressesPageContainer from '../containers/AddressesPageContainer';
import TransactionsPage from './TransactionsPage';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ConfigurationPageContainer} />
      <Route path="/app" component={AppContainer}>
        <IndexRoute component={SendPage} />
        <Route path="send" component={SendPage} />
        <Route path="addresses" component={AddressesPageContainer} />
        <Route path="transactions" component={TransactionsPage} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default Root;
