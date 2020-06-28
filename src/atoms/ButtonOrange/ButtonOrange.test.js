import React from 'react';
import { render } from '@testing-library/react';
import ButtonOrange from './index';

test('render', () => {
  render(
    // <BrowserRouter>
    <ButtonOrange>heelp</ButtonOrange>
    // </BrowserRouter>
  );

  // expect(getByTestId('counter')).toHaveTextContent('1');
});
