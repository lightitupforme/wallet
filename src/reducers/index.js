import { combineReducers } from 'redux';

import configuration, * as fromConfiguration from './configuration';
import balance, * as fromBalance from './balance';
import addresses, * as fromAddresses from './addresses';

const reducers = combineReducers({ configuration, balance, addresses });

export default reducers;

export const getUsername = state => fromConfiguration.getUsername(state);

export const getPassword = state => fromConfiguration.getPassword(state);

export const getBalance = state => fromBalance.getBalance(state);

export const getAddresses = state => fromAddresses.getAddresses(state);
