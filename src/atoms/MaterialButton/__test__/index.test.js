import React from 'react';

import MaterialButton from '../index';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('it renders', () => {
  render(<MaterialButton />);
});
/* it('button component is rendering', () => {
  const { getByTestId } = render(<MaterialButton />);
  expect(getByTestId('button')).render
});
 */
it('it renders with correct text', () => {
  const { getByTestId } = render(<MaterialButton name="Submit" />);
  expect(getByTestId('button')).toHaveTextContent('Submit');
});

it('it matches snapshot', () => {
  const tree = renderer.create(<MaterialButton name="Submit" />).toJSON();
  expect(tree).toMatchSnapshot();
});
