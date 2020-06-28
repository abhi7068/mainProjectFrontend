import React from 'react';
import { render } from '../../../utils';
import DashboardLists from '../DashboardLists';
/* import ReactDOM from 'react-dom'; */

it('it renders', () => {
  render(<DashboardLists classes="" />);
});
it('snapshot', () => {
  const { asFragment } = render(<DashboardLists classes="" />);
  expect(asFragment(<DashboardLists classes="" />)).toMatchSnapshot();
});
