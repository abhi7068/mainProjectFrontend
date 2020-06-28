import React from 'react';

import Rating from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Rating />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<Rating />);
  expect(asFragment(render(<Rating />))).toMatchSnapshot();
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<Rating />);
  expect(getByTestId('Rating')).toHaveTextContent('Good');
});
