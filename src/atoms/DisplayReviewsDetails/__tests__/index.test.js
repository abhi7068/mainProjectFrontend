import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DisplayReviewsDetails from '../index';
import React from 'react';
afterEach(cleanup);
it('renders', () => {
  const data = {
    rating: 5,
    comment: 'Nice Picture',
    user: {
      name: 'Madan Murari',
    },
  };
  const { asFragment } = render(<DisplayReviewsDetails data={data} />);
  expect(asFragment()).toMatchSnapshot();
});
