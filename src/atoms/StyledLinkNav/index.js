import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledLinks = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
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
