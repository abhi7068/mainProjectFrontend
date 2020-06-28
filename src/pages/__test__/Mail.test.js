import React from 'react';
import Mail from '../Mail';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Mail />);
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<Mail />);
  expect(getByTestId('mail2')).toHaveTextContent('giftyoyo008@gmail.com');
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<Mail />);
  expect(getByTestId('mail3')).toHaveTextContent('+91-9705065342');
});
