import React from 'react';
import { render } from '../../../utils';
import Dashitems from '../index';

it('it renders', () => {
  render(<Dashitems />);
});
it('snapshot', () => {
  const { asFragment } = render(<Dashitems />);

  expect(asFragment(<Dashitems />)).toMatchSnapshot();
});
