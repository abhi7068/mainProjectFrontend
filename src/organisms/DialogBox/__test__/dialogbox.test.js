import React from 'react';
import DialogBox from '../index';
import { render } from '@testing-library/react';

it('snapshot', () => {
  const { asFragment } = render(<DialogBox />);

  expect(asFragment(<DialogBox />)).toMatchSnapshot();
});
