import React from 'react';
import ReactDOM from 'react-dom';
import Addpoint from '../index';
import { render } from '@testing-library/react';

it('it renders', () => {
  render(<Addpoint />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<Addpoint />);
  expect(asFragment(render(<Addpoint />))).toMatchSnapshot();
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<Addpoint />);
  expect(getByTestId('simple')).toHaveTextContent('Add Points');
});
it('renders with a expected length', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Addpoint />, div);
  expect(div.querySelectorAll('input')).toHaveLength(1);
});
it('renders with a expected length', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Addpoint type="text" />, div);
  expect(div.querySelector('input')).toHaveAttribute('type', 'text');
});
/* test('should increment to 2 and subtotal increases', () => {
  const { getByTestId } = render(<Addpoint />);
  fireEvent.click(getByTestId('simple'));
  expect(getByTestId('alert')).toHaveTextContent('gv');
}); */
