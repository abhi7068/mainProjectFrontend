import React from 'react';
import { render, cleanup } from '../../utils';
import Footer from './index';

afterEach(cleanup);

it('creatingsnapshot', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
