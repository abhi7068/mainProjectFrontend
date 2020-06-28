import React from 'react';
import ReactDOM from 'react-dom';
import Redeem from '../index';
import { render, fireEvent } from '../../../utils';
import { Provider } from 'react-redux';
import reducer from '../../../store/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
const store = createStore(reducer, applyMiddleware(thunk));

it('it renders', () => {
  render(<Redeem />);
});

it('should take a snapshot', () => {
  const { asFragment } = render(<Redeem />);
  expect(asFragment(render(<Redeem />))).toMatchSnapshot();
});

it('renders with a expected length', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Redeem />
      </BrowserRouter>
    </Provider>,
    div
  );
  expect(div.querySelectorAll('input')).toHaveLength(1);
});
it('it renders with correct text', () => {
  const { getByTestId } = render(<Redeem />);
  expect(getByTestId('button')).toHaveTextContent('Redeem');
});
it('renders with expected attribute', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Redeem />
      </BrowserRouter>
    </Provider>,
    div
  );
  expect(div.querySelector('input')).toHaveAttribute('type', 'text');
});
it('to be true', () => {
  const { getByTestId } = render(<Redeem />);
  expect(fireEvent.click(getByTestId('button'))).toBe(true);
});
