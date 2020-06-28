import React from 'react';
import { render, cleanup } from '../../utils';
import MobileFooter from '../MobileFooter';
afterEach(cleanup);
it('creatingsnapshot', () => {
  const { asFragment } = render(<MobileFooter></MobileFooter>);
  expect(asFragment()).toMatchSnapshot();
});
