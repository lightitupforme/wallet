import React from 'react';
import { render } from 'react-dom';

import './styles/photon.min.css';
import Root from './components/Root';
import config from './config';

const store = config();

render(<Root store={store} />, document.getElementById('app'));
