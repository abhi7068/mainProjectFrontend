import React from 'react';
import { render, cleanup, fireEvent } from '../../../utils';
import Cart from '../index';
import IMAGE_URL from '../../../constants/IMAGE_URL';

const cartNoCount = [
  {
    count: 1,
    _id: '5ea522c906d5053ee84d185f',
    product: {
      disabled: false,
      reviews: [],
      _id: '5e8c615afa2d330554c806c4',
      product_name: 'watch',
      description: 'great watch',
      price: 100,
      discount: 0,
      created_at: '2020-04-07T11:17:46.960Z',
      updated_at: '2020-04-07T11:17:46.960Z',
      __v: 0,
    },
  },
];

afterEach(cleanup);

test('should take a snapshot', () => {
  const { asFragment } = render(<Cart />, {
    initialState: { cart: cartNoCount },
  });
  expect(
    asFragment(render(<Cart />, { initialState: { cart: cartNoCount } }))
  ).toMatchSnapshot();
});

test('should take a snapshot', () => {
  const { asFragment } = render(<Cart />);
  expect(asFragment(render(<Cart />))).toMatchSnapshot();
});

test('should equal to 1', () => {
  const { getByTestId, getByText } = render(<Cart />, {
    initialState: { cart: cartNoCount },
  });
  expect(getByTestId('counter')).toHaveTextContent(1);
  expect(getByText('Your Cart')).toBeInTheDocument();
  expect(getByTestId('increase')).not.toHaveAttribute('disabled');
});

test('remove button should be disabled', () => {
  const { getByTestId } = render(<Cart />, {
    initialState: { cart: cartNoCount },
  });
  expect(getByTestId('counter')).toHaveTextContent(1);
  expect(getByTestId('decrease')).toBeDisabled();
});

test('should have product heading and image', () => {
  const { getByTestId } = render(<Cart />, {
    initialState: { cart: cartNoCount },
  });
  expect(getByTestId('product-img').src).toEqual(IMAGE_URL);
  expect(getByTestId('product-heading')).toHaveTextContent('watch');
});

test('should have category Name', () => {
  const { getByTestId } = render(<Cart />, {
    initialState: { cart: cartNoCount },
  });
  expect(getByTestId('category-name')).toHaveTextContent('No Category');
});

test('should increment to 2 and subtotal increases', () => {
  const { getByTestId } = render(<Cart />, {
    initialState: { cart: cartNoCount },
  });
  fireEvent.click(getByTestId('increase'));
  expect(getByTestId('counter')).toHaveTextContent(2);
  expect(getByTestId('subtotal1')).toHaveTextContent(
    'Subtotal (2 items) : 200 points'
  );
  expect(getByTestId('subtotal2')).toHaveTextContent(
    'Subtotal (2 items) : 200 points'
  );
});

test('should remove from cart', () => {
  const { getByTestId } = render(<Cart />, {
    initialState: { cart: cartNoCount },
  });
  fireEvent.click(getByTestId('remove-button'));
  expect(getByTestId('cart-container')).toHaveTextContent(
    'Please Add Something To Cart'
  );
});
