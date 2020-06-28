import React from 'react';
import Divider from '../index';
import { render, cleanup } from '@testing-library/react';
afterEach(cleanup);
it('it renders', () => {
  render(<Divider />);
});
it('snapshot', () => {
  const { asFragment } = render(<Divider />);
  expect(asFragment()).toMatchSnapshot();
});
