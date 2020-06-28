import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const StyledLinks = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
`;
const StyledLink = (props) => {
  return (
    <div>
      <StyledLinks data-testid="StyledLink " to={props.to}>
        {' '}
        {props.innerText}
      </StyledLinks>
    </div>
  );
};
StyledLink.propTypes = {
  to: PropTypes.string,
  innerText: PropTypes.string,
};
export default StyledLink;
