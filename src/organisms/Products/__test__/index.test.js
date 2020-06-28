import React from 'react';
import Products from '../index';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../../store/reducers/rootReducer';
import thunk from 'redux-thunk';
/* import axiosMock from 'axios'; */
import { BrowserRouter } from 'react-router-dom';
const store = createStore(reducer, applyMiddleware(thunk));
afterEach(cleanup);

it('matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Products product="" />
      </BrowserRouter>
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
