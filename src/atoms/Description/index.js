import React from 'react'
import PropTypes from 'prop-types';

export default function index(props) {
  return (
    <>
      <p data-testid="description">{props.description}
        This impressive paella is a perfect party dish and a fun meal tocook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
      </p>
    </>
  );
}
index.propTypes = {
  description: PropTypes.string
}
