import React from 'react';
import { render } from '../../../utils';
import Product from '../index';
/* import ReactDOM from 'react-dom'; */

it('it renders', () => {
  render(<Product product={{ reviews: [] }} />);
});
it('snapshot', () => {
  const { asFragment } = render(<Product product={{ reviews: [] }} />);
  expect(asFragment(<Product product={{ reviews: [] }} />)).toMatchSnapshot();
});
