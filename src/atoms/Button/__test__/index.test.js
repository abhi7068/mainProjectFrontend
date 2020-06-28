import React from 'react';

import Button from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Button />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<Button />);
  expect(asFragment(render(<Button />))).toMatchSnapshot();
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<Button />);
  expect(getByTestId('button')).toHaveTextContent('This is a normal Button');
});
