import React from 'react';
import ReactDOM from 'react-dom';
import Signup from '../index';
import { render, fireEvent } from '../../../utils';
import { Provider } from 'react-redux';
import reducer from '../../../store/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
const store = createStore(reducer, applyMiddleware(thunk));
it('it renders', () => {
  render(<Signup />);
});

it('should take a snapshot', () => {
  const { asFragment } = render(<Signup />);
  expect(asFragment(render(<Signup />))).toMatchSnapshot();
});
it('renders with a expected length', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </Provider>,
    div
  );
  expect(div.querySelectorAll('input')).toHaveLength(5);
});
it('renders with a expected attribute', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </Provider>,
    div
  );
  expect(div.querySelector('input')).toHaveAttribute('type', 'text');
});
it('to be true', () => {
  const { getByTestId } = render(<Signup />);
  expect(fireEvent.click(getByTestId('Reset'))).toBe(true);
});
