import React from 'react';
import { render } from '../../../../utils';
import AddProduct from '../index';
import axiosMock from 'axios';

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
it('it renders', () => {
  axiosMock.get.mockImplementationOnce(() => Promise.resolve(categories));
  const div = document.createElement('div');
  render(
    <AddProduct />,

    div
  );
});

it('renders with expected length"', () => {
  axiosMock.get.mockImplementationOnce(() => Promise.resolve(categories));
  const div = document.createElement('div');
  render(
    <AddProduct />,

    expect(div.querySelectorAll('input')).toHaveLength(0)
  );
  // expect(div.querySelector('label')).toHaveTextContent('Favorite Number');
});
it('it renders with correct text', () => {
  axiosMock.get.mockImplementationOnce(() => Promise.resolve(categories));
  const { getByTestId } = render(<AddProduct />);
  expect(getByTestId('button')).toHaveTextContent('Submit');
});
it('to be true', () => {
  axiosMock.get.mockImplementationOnce(() => Promise.resolve(categories));

  render(<AddProduct />);
  // expect(fireEvent.click(getByTestId('button'))).toBe(true);
  // axiosMock.post.mockImplementationOnce(() => Promise.resolve(true));
});
// it('mock axios', async () => {
//   const { getByTestId } = render(<AddProduct />);
//   axiosMock.get.mockResolvedValueOnce({
//     data: {
//       reviews: [],
//       _id: '22323der23123ssa231213',
//       product_name: 'watch',
//       category: 'watch',
//       description: 'great watch',
//       price: 0,
//       discount: 0,
//       created_at: 0,
//       updated_at: 0,
//     },
//   });
// const resolvedSpan = await waitForElement(() => getByTestId('button'));
// //expect(axiosMock.get).toHaveBeenCalledTimes(0);
// // expect(fireEvent.click(getByTestId('button'))).then(toBe(true));
// expect(resolvedSpan).toHaveTextContent({
//   data: {
//     reviews: [],
//     _id: '22323der23123ssa231213',
//     product_name: 'watch',
//     category: 'watch',
//     description: 'great watch',
//     price: 0,
//     discount: 0,
//     created_at: 0,
//     updated_at: 0,
//   },
// });
// });
