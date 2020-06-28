import React from 'react';
import { render } from '../../utils';
import Title from './index';

test('render', () => {
  const { asFragment } = render(<Title />);
  expect(asFragment()).toMatchSnapshot();
});
test('render', () => {
  const { getByTestId } = render(<Title children="children" />);
  expect(getByTestId('Typography')).toHaveTextContent('children');
});
