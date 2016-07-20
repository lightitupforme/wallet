import 'whatwg-fetch';

const init = (username, password, method) => fetch('http://127.0.0.1:8332/', {
  method: 'POST',
  headers: new Headers({
    Authorization: `Basic ${btoa(`${username}:${password}`)}`,
    'Content-Type': 'text/plain;',
  }),
  body: JSON.stringify({
    method,
    jsonrpc: '1.0',
    params: [],
  }),
}).then(response => response.json());

export const getBalance = (username, password) => init(username, password, 'getbalance');
