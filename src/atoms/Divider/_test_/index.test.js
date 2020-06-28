import React from 'react';

import Divider from '../index';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('it renders', () => {
  render(<Divider />);
});

it('it renders with correct text', () => {
  const { getByTestId } = render(<Divider children="Submit" />);
  expect(getByTestId('button')).toHaveTextContent('Submit');
});

it('it matches snapshot', () => {
  const tree = renderer.create(<Divider children="Submit" />).toJSON();
  expect(tree).toMatchSnapshot();
});
