import React from 'react';
import Signuptitle from '../index';
import { render } from '../../../utils';

it('it renders', () => {
  render(<Signuptitle />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<Signuptitle />);
  expect(asFragment(render(<Signuptitle />))).toMatchSnapshot();
});
