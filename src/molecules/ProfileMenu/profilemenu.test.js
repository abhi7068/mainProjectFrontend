import { render } from '../../utils';

import ProfileMenu from './index';
import React from 'react';

test('can render with redux with custom store', () => {
  render(<ProfileMenu />);
});
it('snapshot', () => {
  // render(<ProfileMenu />);
  const { asFragment } = render(<ProfileMenu />);
  expect(asFragment(<ProfileMenu />)).toMatchSnapshot();
});
