import React from 'react';

import Label from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Label />);
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<Label name="Submit" />);
  expect(getByTestId('label')).toHaveTextContent('Submit');
});
it('should take a snapshot', () => {
  const { asFragment } = render(<Label />);
  expect(asFragment(render(<Label />))).toMatchSnapshot();
});
