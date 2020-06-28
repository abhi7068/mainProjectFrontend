import React from 'react';

import AddCategoryForm from '../index';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

it('it renders', () => {
  render(<AddCategoryForm value="" />);
});

it('renders with expected attribute"', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddCategoryForm value="" />, div);
  expect(div.querySelector('input')).toHaveAttribute('type', 'text');
  // expect(div.querySelector('label')).toHaveTextContent('Favorite Number');
});
it('renders with expected attribute"', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddCategoryForm value={{ title: 'hello' }} />, div);
  expect(div.querySelector('input')).toHaveAttribute('value', 'hello');
  // expect(div.querySelector('label')).toHaveTextContent('Favorite Number');
});
