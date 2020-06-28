import React from 'react';

import Popup from '../index';
import { render } from '../../../utils';

it('it renders', () => {
  render(<Popup />);
});

it('should take a snapshot', () => {
  const { asFragment } = render(<Popup />);
  expect(asFragment(render(<Popup />))).toMatchSnapshot();
});
