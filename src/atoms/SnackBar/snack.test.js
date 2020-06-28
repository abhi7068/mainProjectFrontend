import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Snackbar from './index';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

it('render', () => {
  render(
    <BrowserRouter>
      <Snackbar />
    </BrowserRouter>
  );

  // expect(getByTestId('counter')).toHaveTextContent('1');
});

it('snack', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Snackbar name="done" severity="warning" path="/" />
    </BrowserRouter>
  );
  const alert = getByTestId('alert');

  fireEvent.click(getByTestId('Cancel'));
  expect(getByTestId('Cancel')).toHaveTextContent('done');
  expect(alert).toBeInTheDocument();

  // expect(getByTestId('counter')).toHaveTextContent('1');
});
