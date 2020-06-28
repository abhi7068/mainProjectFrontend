import React from 'react';

import AddProductForm from '../index';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

it('it renders', () => {
  render(<AddProductForm />);
});

it('renders with a expected length', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddProductForm />, div);
  expect(div.querySelectorAll('input')).toHaveLength(4);
});

/* it('it renders', () => {
  const { getByTestId } = render(<AddProductForm />);
  expect(getByTestId('input1')).
});
 */
