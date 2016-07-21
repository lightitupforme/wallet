import { combineReducers } from 'redux';

import configuration, * as fromConfiguration from './configuration';
import authentication, * as fromAuthentication from './authentication';
import balance, * as fromBalance from './balance';
import addresses, * as fromAddresses from './addresses';
import transactions, * as fromTransactions from './transactions';

const reducers = combineReducers({
  configuration,
  authentication,
  balance,
  addresses,
  transactions,
});

export default reducers;

export const getCredentials = state => fromConfiguration.getCredentials(state);

export const getAuthentication = state => fromAuthentication.getAuthentication(state);

export const getBalance = state => fromBalance.getBalance(state);

export const getAddresses = state => fromAddresses.getAddresses(state);

export const getTransactions = state => fromTransactions.getTransactions(state);
