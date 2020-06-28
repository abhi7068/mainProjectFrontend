import React from 'react';
import { render, cleanup } from '../../utils';
import StyledLink from '../StyledLink/index';

afterEach(cleanup);
it('checkinginnerText', () => {
  const { getByTestId } = render(
    <StyledLink innerText="Home" to="/"></StyledLink>
  );
  expect(getByTestId('StyledLink')).toHaveTextContent('Home');
});
it('creatingsnapshot', () => {
  const { asFragment } = render(
    <StyledLink innerText="Home" to="/"></StyledLink>
  );
  expect(asFragment()).toMatchSnapshot();
});
