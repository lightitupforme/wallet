import * as bitcoin from './bitcoin';
import * as exchange from './exchange';

export const getHelp = credentials => bitcoin.getHelp(credentials);

export const getBalance = credentials => bitcoin.getBalance(credentials);

export const getExchange = () => exchange.getExchange();

export const getAddresses = credentials => bitcoin.getAddresses(credentials);

export const addAddress = credentials => bitcoin.addAddress(credentials);

export const getTransactions = credentials => bitcoin.getTransactions(credentials);
