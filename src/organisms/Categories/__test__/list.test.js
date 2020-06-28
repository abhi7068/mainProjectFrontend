import { render } from '../../../utils';

import List from '../ListCategories';
import axiosMock from 'axios';

import React from 'react';
jest.mock('axios');

const categories = {
  data: [
    {
      title: 'ddsd',
      _id: '3232323jdasdd',
    },
    {
      title: 'dd',
      _id: '3232323jdasdd',
    },
  ],
  status: 'SUCCEEDED',
};

it('snapshot', () => {
  axiosMock.get.mockImplementationOnce(() => Promise.resolve(categories));

  const { asFragment } = render(<List />, { initialState: { categories } });

  expect(
    asFragment(<List />, { initialState: { categories } })
  ).toMatchSnapshot();
});

it('mocking compoundidmount call', () => {
  axiosMock.get.mockImplementationOnce(() => Promise.resolve(categories));

  render(<List />, { initialState: { categories } });
  // expect(getByTestId('linkToUpdate')).toContainElement(link);
});
