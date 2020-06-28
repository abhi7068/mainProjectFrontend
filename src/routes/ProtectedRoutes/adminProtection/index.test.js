import React from 'react';
import { render, cleanup } from '../../../utils';
import Protected from './index';
afterEach(cleanup);
it('renders', () => {
  const { asFragment } = render(<Protected />);
  expect(asFragment(<Protected />)).toMatchSnapshot();
});
