import React from 'react';
import { render } from '../../../../utils';
import { fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import reducer from '../../../../store/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import UpdateProduct from '../index';
const store = createStore(reducer, applyMiddleware(thunk));

it('should render', () => {
  render(<UpdateProduct />);
});

it('should take a snapshot', () => {
  const { asFragment } = render(
    <UpdateProduct categories={{ status: 'DONE' }} />
  );
  expect(
    asFragment(render(<UpdateProduct categories={{ status: 'DONE' }} />))
  ).toMatchSnapshot();
});

it('to be true', () => {
  const { getByTestId } = render(<UpdateProduct />);
  expect(fireEvent.click(getByTestId('button'))).toBe(true);
});
it('renders with expected attribute', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <UpdateProduct />
      </BrowserRouter>
    </Provider>,
    div
  );
  expect(div.querySelectorAll('input')).toHaveLength(5);
});
it('renders with expected attribute', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <UpdateProduct />
      </BrowserRouter>
    </Provider>,
    div
  );
  expect(div.querySelector('input')).toHaveAttribute('type', 'text');
});
