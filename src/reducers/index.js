import { combineReducers } from 'redux';

import balance, * as fromBalance from './balance';

const reducers = combineReducers({ balance });

export default reducers;

export const getBalance = state => fromBalance.getBalance(state);
