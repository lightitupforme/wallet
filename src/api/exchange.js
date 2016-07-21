import 'whatwg-fetch';

export const getExchange = () =>
  fetch('https://coinmarketcap-nexuist.rhcloud.com/api/btc')
    .then(response => response.json());
