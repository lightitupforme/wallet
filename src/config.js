import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import reducers from './reducers';
import { load, save } from './storage';

const store = createStore(reducers, load(), applyMiddleware(thunk));

store.subscribe(throttle(() => {
  save(store.getState());
}, 1000));

const config = () => store;

export default config;
