import React from 'react';

import LOginButton from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<LOginButton />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<LOginButton />);
  expect(asFragment(render(<LOginButton />))).toMatchSnapshot();
});
