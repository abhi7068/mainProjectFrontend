import React from 'react';
import ReactDOM from 'react-dom';

import Input from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Input />);
});

it('renders with expected attribute"', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input type="Number" />, div);
  expect(div.querySelector('input')).toHaveAttribute('type', 'Number');
  // expect(div.querySelector('label')).toHaveTextContent('Favorite Number');
});

it('renders with a expected length', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
  expect(div.querySelectorAll('input')).toHaveLength(1);
  // expect(div.querySelector('label')).toHaveTextContent('Favorite Number');
});
