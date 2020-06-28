import React from 'react';
import Buttonn from '../Buttonn';
import { render, cleanup } from '@testing-library/react';
afterEach(cleanup);
it('renders', () => {
  const { getByTestId } = render(<Buttonn handleClick="handleClick"></Buttonn>);
  expect(getByTestId('Buttonn')).toHaveTextContent('Redeem');
});
it('renders', () => {
  const { asFragment } = render(<Buttonn handleClick="handleClick"></Buttonn>);
  expect(asFragment()).toMatchSnapshot();
});
