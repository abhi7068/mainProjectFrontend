import React from 'react';

import ListProductPage from '../ListProductsPage';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<ListProductPage />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<ListProductPage />);
  expect(asFragment(render(<ListProductPage />))).toMatchSnapshot();
});
