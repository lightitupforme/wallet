import * as bitcoin from './bitcoin';

export const getBalance = (username, password) => bitcoin.getBalance(username, password);

export const getAddresses = (username, password) => bitcoin.getAddresses(username, password);

export const addAddress = (username, password) => bitcoin.addAddress(username, password);
