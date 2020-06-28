import UpdateCategory from '../UpdateCategory';
import React from 'react';
import { render } from '../../../utils';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('should render', () => {
  render(<UpdateCategory />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<UpdateCategory />);
  expect(asFragment(render(<UpdateCategory />))).toMatchSnapshot();
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<UpdateCategory />);
  expect(getByTestId('button')).toHaveTextContent('Submit');
});
it('renders with expected length"', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UpdateCategory />
    </BrowserRouter>,

    div
  );
  expect(div.querySelectorAll('input')).toHaveLength(1);
});
it('renders with expected length"', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UpdateCategory />
    </BrowserRouter>,
    div
  );
  expect(div.querySelector('input')).toHaveAttribute('type', 'text');
});
it('renders with expected length"', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UpdateCategory />
    </BrowserRouter>,
    div
  );
  expect(div.querySelector('input')).toHaveAttribute('name', 'title');
});
