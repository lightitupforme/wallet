import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

import Root from '../src/components/Root';

expect.extend(expectJSX);

/* eslint-disable no-undef */
describe('components', () => {
  it('should render the root component', () => {
    const renderer = createRenderer();

    renderer.render(<Root />);

    expect(renderer.getRenderOutput().type).toIncludeJSX('h1');
  });
});
/* eslint-enable no-undef */
