import { createStore } from 'redux';

import reducers from './reducers';

const config = () => createStore(reducers);

export default config;
