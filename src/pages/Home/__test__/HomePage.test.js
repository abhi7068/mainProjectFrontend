import React from 'react';
import HomePage from '../HomePage';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../../store/reducers/rootReducer';
import thunk from 'redux-thunk';
const store = createStore(reducer, applyMiddleware(thunk));
afterEach(cleanup);

it('matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <HomePage match={{ params: '' }} />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
