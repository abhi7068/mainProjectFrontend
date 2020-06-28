import React from 'react';

import LinkComponent from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<LinkComponent />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<LinkComponent />);
  expect(asFragment(render(<LinkComponent />))).toMatchSnapshot();
});
