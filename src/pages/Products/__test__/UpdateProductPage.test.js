import React from 'react';

import UpdateProductPage from '../UpdateProductPage';
import { render } from '../../../utils';

it('it renders', () => {
  render(<UpdateProductPage match={{ params: '' }} />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<UpdateProductPage match={{ params: '' }} />);
  expect(
    asFragment(render(<UpdateProductPage match={{ params: '' }} />))
  ).toMatchSnapshot();
});
