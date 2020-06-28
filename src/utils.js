import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';
import reducer from '../src/store/reducers/rootReducer';
import { Router } from 'react-router-dom';

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    const history = createMemoryHistory();
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  }
  Wrapper.propTypes = {
    children: PropTypes.elementType,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
export * from '@testing-library/react';
export { render };
