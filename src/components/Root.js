import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import SendPage from './SendPage';
import AddressesPage from './AddressesPage';
import TransactionsPage from './TransactionsPage';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SendPage} />
        <Route path="send" component={SendPage} />
        <Route path="addresses" component={AddressesPage} />
        <Route path="transactions" component={TransactionsPage} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default Root;
