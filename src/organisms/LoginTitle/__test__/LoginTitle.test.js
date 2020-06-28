import React from 'react';

import LoginTitle from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<LoginTitle />);
});

it('should take a snapshot', () => {
  const { asFragment } = render(<LoginTitle />);
  expect(asFragment(render(<LoginTitle />))).toMatchSnapshot();
});
