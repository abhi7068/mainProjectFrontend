import React from 'react';
import { render } from '@testing-library/react';
import CancelButton from './index';

test('render', () => {
  render(
    // <BrowserRouter>
    <CancelButton>heelp</CancelButton>
    // </BrowserRouter>
  );

  // expect(getByTestId('counter')).toHaveTextContent('1');
});
