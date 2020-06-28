import React from 'react';
import { render } from '@testing-library/react';
import ButtonWhite from './index';

test('render', () => {
  render(
    // <BrowserRouter>
    <ButtonWhite>heelp</ButtonWhite>
    // </BrowserRouter>
  );

  // expect(getByTestId('counter')).toHaveTextContent('1');
});
