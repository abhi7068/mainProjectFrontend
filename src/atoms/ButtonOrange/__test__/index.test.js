import React from 'react';
import ButtonOrange from '../index';
import { render, cleanup } from '@testing-library/react';
afterEach(cleanup);
it('it renders', () => {
  render(<ButtonOrange />);
});
it('snapshot', () => {
  const { asFragment } = render(<ButtonOrange />);
  expect(asFragment()).toMatchSnapshot();
});
