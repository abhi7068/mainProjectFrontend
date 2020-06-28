import React from 'react';

import Simple from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Simple />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<Simple />);
  expect(asFragment(render(<Simple />))).toMatchSnapshot();
});
