import React from 'react';
import { render, cleanup } from '../../utils';
import StyledLinkNav from '../StyledLinkNav/index';

afterEach(cleanup);
it('checkinginnerText', () => {
  const { getByTestId } = render(
    <StyledLinkNav innerText="Home" to="/"></StyledLinkNav>
  );
  expect(getByTestId('StyledLink')).toHaveTextContent('Home');
});
it('creatingsnapshot', () => {
  const { asFragment } = render(
    <StyledLinkNav innerText="Login" to="/Login"></StyledLinkNav>
  );
  expect(asFragment()).toMatchSnapshot();
});
