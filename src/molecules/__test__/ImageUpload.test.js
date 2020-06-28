import React from 'react';
import { render, fireEvent } from '../../utils';
import ImageUpload from '../ImageUpload';
test('< ImageUpload/> | Uploading an image should open a modal', () => {
  const { getByTestId } = render(<ImageUpload />);

  const inputEl = getByTestId('avatar');
  const file = new File(['(⌐□_□)'], 'one.png', {
    type: 'image/png',
  });

  Object.defineProperty(inputEl, 'files', {
    value: [file],
  });

  fireEvent.change(inputEl);
  fireEvent.click(inputEl);
});
