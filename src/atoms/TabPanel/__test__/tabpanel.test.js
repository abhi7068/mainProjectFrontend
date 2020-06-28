import React from 'react';
import TabPanel from '../index';
import { render } from '@testing-library/react';

it('test', () => {
  render(<TabPanel>help</TabPanel>);
});

it('snapshot', () => {
  const { asFragment } = render(<TabPanel />);

  expect(asFragment(<TabPanel />)).toMatchSnapshot();
});
