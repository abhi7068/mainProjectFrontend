import React from 'react';

import Aboutus from '../Aboutus';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Aboutus />);
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<Aboutus />);
  expect(getByTestId('aboutus')).toHaveTextContent('WELCOME TO YOYO GIFTS');
});
