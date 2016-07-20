import 'whatwg-fetch';

const init = (username, password, method, params = []) => fetch('http://127.0.0.1:8332/', {
  method: 'POST',
  headers: new Headers({
    Authorization: `Basic ${btoa(`${username}:${password}`)}`,
    'Content-Type': 'text/plain;',
  }),
  body: JSON.stringify({
    method,
    params,
    jsonrpc: '1.0',
  }),
}).then(response => response.json());

export const getBalance = (username, password) =>
  init(username, password, 'getbalance');

export const getAddresses = (username, password) =>
  init(username, password, 'listreceivedbyaddress', [0, true]);

export const addAddress = (username, password) =>
  init(username, password, 'getnewaddress');
