import React from 'react';
import PropTypes from 'prop-types';
const Price = props => {
  return (
    <>

      <p key={props.id} style={{ fontSize: '2.5vh' }} data-testid="price" >{props.value} points </p>

    </>
  );
};

Price.propTypes = {
  value: PropTypes.number,
  id: PropTypes.number,
};
export default Price;
