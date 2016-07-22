import 'whatwg-fetch';

const init = (credentials, method, params = []) =>
  fetch(`${credentials.ssl ? 'https' : 'http'}://${credentials.host}:${credentials.port}/`, {
    method: 'POST',
    headers: new Headers({
      Authorization: `Basic ${btoa(`${credentials.username}:${credentials.password}`)}`,
      'Content-Type': 'text/plain;',
    }),
    body: JSON.stringify({
      method,
      params,
      jsonrpc: '1.0',
    }),
  }).then(response => response.json());

export const getHelp = credentials =>
  init(credentials, 'help');

export const getBalance = credentials =>
  init(credentials, 'getbalance');

export const getAddresses = credentials =>
  init(credentials, 'listreceivedbyaddress', [0, true]);

export const addAddress = (credentials, label = null) =>
  init(credentials, 'getnewaddress', label ? [label] : []);

export const getTransactions = credentials =>
  init(credentials, 'listtransactions', ['*', 300]);

export const sendAmount = (credentials, address, amount) =>
  init(credentials, 'sendtoaddress', [address, amount]);
