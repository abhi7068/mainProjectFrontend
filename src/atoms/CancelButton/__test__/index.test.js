import React from 'react';
import CancelButton from '../index';
import { render, cleanup } from '@testing-library/react';
afterEach(cleanup);
it('it renders', () => {
  render(<CancelButton />);
});
it('snapshot', () => {
  const { asFragment } = render(<CancelButton />);
  expect(asFragment()).toMatchSnapshot();
});
