import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Category from './../index';
import { simpleHeading } from '../../../services/kebab';
afterEach(cleanup);

it('should render', () => {
  const { getByTestId } = render(<Category />);
  expect(getByTestId('no-category')).toHaveTextContent('No Category');
});
it('should render category', () => {
  const { getByTestId } = render(<Category category={{ title: 'gadget' }} />);
  expect(getByTestId('category')).toHaveTextContent(simpleHeading('gadget'));
});
