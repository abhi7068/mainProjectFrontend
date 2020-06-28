import React from 'react';
import { render } from '../../../utils';
import Dasboard from '../Dashboard';

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
  status: 'adsasa',
};
it('it renders', () => {
  render(<Dasboard />, { initialState: { categories } });
});
it('snapshot', () => {
  const { asFragment } = render(<Dasboard />, { initialState: { categories } });

  expect(
    asFragment(<Dasboard />, { initialState: { categories } })
  ).toMatchSnapshot();
});
