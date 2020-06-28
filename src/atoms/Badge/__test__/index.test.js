import React from 'react';

import Badge from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Badge />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<Badge />);
  expect(asFragment(render(<Badge />))).toMatchSnapshot();
});
