import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react';
import SendMailForm from './index';
import { render } from '../../utils';

it('it renders', () => {
  render(<SendMailForm />);
});
it('should take a snapshot', () => {
  const { asFragment } = render(<SendMailForm />);
  expect(asFragment(render(<SendMailForm />))).toMatchSnapshot();
});

it('it renders with correct text', () => {
  const { getByTestId } = render(<SendMailForm />);
  expect(getByTestId('button')).toHaveTextContent('Send');
});
it('renders with expected length"', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SendMailForm />
    </BrowserRouter>,
    div
  );
  expect(div.querySelectorAll('input')).toHaveLength(1);
});
it('renders with expected length"', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SendMailForm />
    </BrowserRouter>,
    div
  );
  expect(div.querySelector('input')).toHaveAttribute('name', 'email');
});
it('to be true', () => {
  const { getByTestId } = render(<SendMailForm />);
  expect(fireEvent.click(getByTestId('button'))).toBe(true);
});
