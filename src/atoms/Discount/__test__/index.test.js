import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Discount from './../index';
afterEach(cleanup);

it('should render no discount', () => {
  const { getByTestId } = render(<Discount />);
  expect(getByTestId('discount')).toHaveTextContent('--');
});
it('should render discount', () => {
  const { getByTestId } = render(<Discount value="50" />);
  expect(getByTestId('pricediscount')).toHaveTextContent('50%');
});
