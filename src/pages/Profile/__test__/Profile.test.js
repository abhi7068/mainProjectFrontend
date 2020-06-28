import React from 'react';
import Profile from '../ProfilePage';
import { render } from '../../../utils';
it('it renders', () => {
  render(<Profile />);
});

it('should take a snapshot', () => {
  const { asFragment } = render(<Profile />);
  expect(asFragment(render(<Profile />))).toMatchSnapshot();
});
