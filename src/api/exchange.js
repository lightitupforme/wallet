import 'whatwg-fetch';

export const getExchange = () =>
  fetch('https://coinmarketcap-nexuist.rhcloud.com/api/btc/price')
    .then(response => response.json());
