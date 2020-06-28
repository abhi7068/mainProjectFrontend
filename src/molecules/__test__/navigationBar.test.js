import React from 'react';
import { render, cleanup } from '../../utils';
import NavigationBar from '../Navigationbar';

afterEach(cleanup);

it('creatingsnapshot', () => {
  const { asFragment } = render(<NavigationBar />);
  expect(asFragment()).toMatchSnapshot();
});
