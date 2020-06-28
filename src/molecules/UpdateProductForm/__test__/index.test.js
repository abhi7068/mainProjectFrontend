import React from 'react';
import ReactDOM from 'react-dom';
import UpdateProductForm from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<UpdateProductForm value="" />);
});

it('renders with a expected length', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpdateProductForm value="" />, div);
  expect(div.querySelectorAll('input')).toHaveLength(4);
});
