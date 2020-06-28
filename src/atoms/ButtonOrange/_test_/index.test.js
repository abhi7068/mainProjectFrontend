import React from 'react';

import ButtonOrange from '../index';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('it renders', () => {
  render(<ButtonOrange />);
});

it('it renders with correct text', () => {
  const { getByTestId } = render(<ButtonOrange children="Submit" />);
  expect(getByTestId('button')).toHaveTextContent('Submit');
});

it('it matches snapshot', () => {
  const tree = renderer.create(<ButtonOrange children="Submit" />).toJSON();
  expect(tree).toMatchSnapshot();
});
