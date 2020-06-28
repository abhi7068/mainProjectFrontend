import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from '../index';
import GoogleButton from 'react-google-button';
import React from 'react';
afterEach(cleanup);
it('render it is', () => {
  const { findByText } = render(<LoginPage />);
  findByText('Login');
});
