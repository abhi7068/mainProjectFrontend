import React from 'react';

import Spinner from '../index';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('it renders', () => {
  render(<Spinner />);
});
it('it matches snapshot', () => {
  const tree = renderer.create(<Spinner />).toJSON();
  expect(tree).toMatchSnapshot();
});
