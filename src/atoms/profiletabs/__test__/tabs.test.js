import React from 'react';
import Tab from '../tabs';
// import { render } from '../../../utils';
import { cleanup } from '@testing-library/react';
import { render } from '../../../utils';
import '@testing-library/jest-dom';
const singleUserDetail = {
  data: {
    cart: [],
    email: 'raje0096@gmail.com',
    isAdmin: false,
    name: 'Rajesh',
    receivedHistory: [],
    sentHistory: [],
    __v: 0,
    _id: '5e9e9435f978e3804cc48333',
  },
  status: 'SUCCEEDED',
};

afterEach(cleanup);
it('it render withour crashing', () => {
  const { asFragment } = render(<Tab />, {
    intialState: { singleUserDetail },
  });
  expect(
    asFragment(<Tab />, {
      intialState: { singleUserDetail },
    })
  ).toMatchSnapshot();
});
