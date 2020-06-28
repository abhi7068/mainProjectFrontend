import React from 'react';
import { render, cleanup } from '../../utils';
import Header from './index';

afterEach(cleanup);

it('creatingsnapshot', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
