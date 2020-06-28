import React from 'react';

import Subtitle from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Subtitle />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<Subtitle />);
  expect(asFragment(render(<Subtitle />))).toMatchSnapshot();
});
