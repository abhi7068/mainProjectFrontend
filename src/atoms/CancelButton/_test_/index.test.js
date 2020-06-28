import React from 'react';

import CancelButton from '../index';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('it renders', () => {
  render(<CancelButton />);
});

it('it renders with correct text', () => {
  const { getByTestId } = render(<CancelButton children="Submit" />);
  expect(getByTestId('button')).toHaveTextContent('Submit');
});

it('it matches snapshot', () => {
  const tree = renderer.create(<CancelButton children="Submit" />).toJSON();
  expect(tree).toMatchSnapshot();
});
