import React from 'react';
import PageNotFound from '../PageNotFound';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<PageNotFound />);
});

it('should take a snapshot', () => {
  const { asFragment } = render(<PageNotFound />);
  expect(asFragment(render(<PageNotFound />))).toMatchSnapshot();
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<PageNotFound />);
  expect(getByTestId('h1')).toHaveTextContent('Error 404');
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<PageNotFound />);
  expect(getByTestId('p')).toHaveTextContent('Page not Found');
});
