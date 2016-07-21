import * as bitcoin from './bitcoin';

export const getHelp = credentials => bitcoin.getHelp(credentials);

export const getBalance = credentials => bitcoin.getBalance(credentials);

export const getAddresses = credentials => bitcoin.getAddresses(credentials);

export const addAddress = credentials => bitcoin.addAddress(credentials);

export const getTransactions = credentials => bitcoin.getTransactions(credentials);
