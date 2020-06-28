import React from 'react';
import ButtonWhite from '../index';
import { render, cleanup } from '@testing-library/react';
afterEach(cleanup);
it('it renders', () => {
  render(<ButtonWhite />);
});
it('snapshot', () => {
  const { asFragment } = render(<ButtonWhite />);
  expect(asFragment()).toMatchSnapshot();
});
