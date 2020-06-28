import React from 'react';
import Profile from '../pro';
// import { render } from '../../../utils';
import { cleanup, fireEvent } from '@testing-library/react';
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
  const { asFragment } = render(<Profile />, {
    intialState: { singleUserDetail },
  });
  expect(
    asFragment(<Profile />, {
      intialState: { singleUserDetail },
    })
  ).toMatchSnapshot();
});

test('it render withour crashing', () => {
  const { getByTestId } = render(<Profile />, {
    intialState: { singleUserDetail },
  });
  expect(fireEvent.click(getByTestId('dialogopen'))).toBe(true);
  // expect(fireEvent.click(getByTestId('"show-data"'))).toBe(true);
});

// expect(getByTestId('show-data')).toHaveTextContent('Yoyobalance');
// expect(fireEvent.click(getByTestId('"show-data"'))).toBe(true);
