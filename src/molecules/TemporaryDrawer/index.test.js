import React from 'react';
import { render, cleanup, fireEvent } from '../../utils';
import TemporaryDrawer from '../TemporaryDrawer';

afterEach(cleanup);
it('renders', () => {
  const { asFragment } = render(<TemporaryDrawer />);
  expect(asFragment(<TemporaryDrawer />)).toMatchSnapshot();
});
it('renders', () => {
  const { getByTestId } = render(<TemporaryDrawer />);
  expect(fireEvent.click(getByTestId('test-input'))).toBe(true);
});
