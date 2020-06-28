import { render } from '../../utils';

import SearchBar from '../SearchBar';

import React from 'react';

it('render', () => {
  render(<SearchBar />);
});

test('matches snapshot 2', () => {
  // axiosMock.get.mockImplementationOnce(() => Promise.resolve(response.data));

  const { asFragment } = render(<SearchBar />);
  expect(asFragment(<SearchBar />)).toMatchSnapshot();
});
