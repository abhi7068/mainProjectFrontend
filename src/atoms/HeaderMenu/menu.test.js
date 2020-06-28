import { render } from '../../utils';
import '@testing-library/jest-dom/extend-expect';
import Menu from './index';

import React from 'react';

it('render it is', () => {
  const { findByText } = render(<Menu />);
  findByText('Profile');
});
it('render it is', () => {
  const { findByText } = render(<Menu />);
  findByText('Redeem');
});
it('render it is', () => {
  const { findByText } = render(<Menu />);
  findByText('Login | Signup');
});
it('render it is', () => {
  const { findByText } = render(<Menu />);
  findByText('Login');
});
it('displays', () => {
  const { getByTestId } = render(<Menu />);
  const anchorEl = getByTestId('anchorEl');
  expect(anchorEl.children);
});
it('displays', () => {
  const { getByTestId } = render(<Menu />);
  const isSnack = getByTestId('isSnack');
  expect(isSnack.children);
});

it('should check if message is displayed when button is clicked', () => {
  const { asFragment } = render(<Menu />);

  expect(asFragment(<Menu />)).toMatchSnapshot();
});
