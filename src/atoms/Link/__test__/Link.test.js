import React from 'react';

import Link from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Link />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<Link />);
  expect(asFragment(render(<Link />))).toMatchSnapshot();
});
