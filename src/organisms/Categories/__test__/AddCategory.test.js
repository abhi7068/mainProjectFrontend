import AddCategory from '../AddCategory';
import React from 'react';
import { render } from '../../../utils';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('should render', () => {
  render(<AddCategory />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<AddCategory />);
  expect(asFragment(render(<AddCategory />))).toMatchSnapshot();
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<AddCategory />);
  expect(getByTestId('button')).toHaveTextContent('Submit');
});
it('renders with expected length"', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AddCategory />
    </BrowserRouter>,

    div
  );
  expect(div.querySelectorAll('input')).toHaveLength(1);
});
it('renders with expected length"', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AddCategory />
    </BrowserRouter>,
    div
  );
  expect(div.querySelector('input')).toHaveAttribute('type', 'text');
});
