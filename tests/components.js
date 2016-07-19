import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

import App, * as fromApp from '../src/components/App';
import TabBar from '../src/components/TabBar';
import SendPage from '../src/components/SendPage';
import AddressesPage from '../src/components/AddressesPage';
import TransactionsPage from '../src/components/TransactionsPage';


expect.extend(expectJSX);

/* eslint-disable no-undef */
describe('components', () => {
  it('should render the App component', () => {
    const renderer = createRenderer();

    renderer.render(<App />);

    expect(renderer.getRenderOutput()).toIncludeJSX(<TabBar tabs={fromApp.tabs} />);
  });

  it('should render the TabBar component', () => {
    const renderer = createRenderer();

    const tabs = [
      { to: '/test', title: 'Test' },
    ];

    renderer.render(<TabBar tabs={tabs} />);

    expect(renderer.getRenderOutput().type).toIncludeJSX('ul');
  });

  it('should render the SendPage component', () => {
    const renderer = createRenderer();

    renderer.render(<SendPage />);

    expect(renderer.getRenderOutput().type).toIncludeJSX('h1');
  });

  it('should render the AddressesPage component', () => {
    const renderer = createRenderer();

    renderer.render(<AddressesPage />);

    expect(renderer.getRenderOutput().type).toIncludeJSX('h1');
  });

  it('should render the TransactionsPage component', () => {
    const renderer = createRenderer();

    renderer.render(<TransactionsPage />);

    expect(renderer.getRenderOutput().type).toIncludeJSX('h1');
  });
});
/* eslint-enable no-undef */
