import React from 'react';

import ButtonWhite from '../index';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('it renders', () => {
  render(<ButtonWhite />);
});

it('it renders with correct text', () => {
  const { getByTestId } = render(<ButtonWhite children="Submit" />);
  expect(getByTestId('button')).toHaveTextContent('Submit');
});

it('it matches snapshot', () => {
  const tree = renderer.create(<ButtonWhite children="Submit" />).toJSON();
  expect(tree).toMatchSnapshot();
});
