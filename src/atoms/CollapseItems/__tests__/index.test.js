import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PrettoSlider from '../index';
import React from 'react';
afterEach(cleanup);
it('renders', () => {
  //   const data = {
  //     rating: 5,
  //     comment: 'Nice Picture',
  //     user: {
  //       name: 'Madan Murari',
  //     },
  //   };
  const props = {
    marksforPrice: [
      {
        value: 0,
        label: '0',
      },
    ],
    min: 0,
    max: 15000,
  };

  const { asFragment } = render(
    <PrettoSlider
      min={props.min}
      max={props.max}
      value={props.value}
      marks={props.marksforPrice}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
