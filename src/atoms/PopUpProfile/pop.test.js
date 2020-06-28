// import { render, fireEvent } from '../../utils';
// import '@testing-library/jest-dom/extend-expect';
import FormDialog from './index';
import { render } from '../../utils';

import React from 'react';

test('can render with redux with custom store', () => {
  render(<FormDialog />);
});

test('snapshot', () => {
  const { asFragment } = render(<FormDialog />);

  // const submit = getByTestId('Cancel');

  expect(asFragment(<FormDialog />)).toMatchSnapshot();
});
