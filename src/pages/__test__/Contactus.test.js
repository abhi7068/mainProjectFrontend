import React from 'react';

import Contactus from '../Contactus';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Contactus />);
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<Contactus />);
  expect(getByTestId('contactus')).toHaveTextContent('giftyoyo008@gmail.com');
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<Contactus />);
  expect(getByTestId('contactus2')).toHaveTextContent('+91-9705065342');
});
