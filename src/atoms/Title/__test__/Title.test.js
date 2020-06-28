import React from 'react';

import Title from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Title />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<Title />);
  expect(asFragment(render(<Title />))).toMatchSnapshot();
});
