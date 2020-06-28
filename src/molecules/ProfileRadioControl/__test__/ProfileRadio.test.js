import React from 'react';
import { render } from '../../../utils';
import ProfileRadio from '../index';
import ReactDOM from 'react-dom';

it('it renders', () => {
  render(<ProfileRadio />);
});
it('snapshot', () => {
  const { asFragment } = render(<ProfileRadio />);
  expect(asFragment(<ProfileRadio />)).toMatchSnapshot();
});
it('renders with a expected length', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileRadio />, div);
  expect(div.querySelectorAll('input')).toHaveLength(3);
});
it('renders with a expected length', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileRadio />, div);
  expect(div.querySelector('input')).toHaveAttribute('value', 'female');
});
