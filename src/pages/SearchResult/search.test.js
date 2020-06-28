import Products from './index';
import { render } from '../../utils';
import React from 'react';
// jest.mock('axios');
const match = {
  params: {
    keyword: 'a',
  },
};
const product = {
  products: [
    {
      reviews: [],
      _id: '22323der23123ssa231213',
      product_name: 'watch',
      category: 'watch',
      description: 'great watch',
      price: 0,
      discount: 0,
      created_at: 0,
      updated_at: 0,
    },
  ],
  isLoading: false,
};

test('matches snapshot 2', () => {
  // axiosMock.get.mockImplementationOnce(() => Promise.resolve(response.data));

  const { asFragment } = render(<Products match={match} />, {
    initialState: { product },
  });
  expect(
    asFragment(<Products match={match} />, {
      initialState: { product },
    })
  ).toMatchSnapshot();
});
