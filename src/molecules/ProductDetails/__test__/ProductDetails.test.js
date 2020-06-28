import React from 'react';
import { render } from '../../../utils';
import ProductDetails from '../index';
import { productDetails } from '../../../store/actions/productDetailAction';
/* import ReactDOM from 'react-dom'; */

it('it renders', () => {
  render(<ProductDetails details="" />);
});
it('snapshot', () => {
  const { asFragment } = render(<productDetails details="" />);
  expect(asFragment(<productDetails details="" />)).toMatchSnapshot();
});
