import React from 'react';

import AddProductPage from '../AddProductPage';
import { render } from '../../../utils';

it('it renders', () => {
  render(<AddProductPage />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<AddProductPage />);
  expect(asFragment(render(<AddProductPage />))).toMatchSnapshot();
});
