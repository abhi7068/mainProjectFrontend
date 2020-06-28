import React from 'react';
import PropTypes from 'prop-types';
const Discount = (props) => {
  return (
    <>
      {!props.value ? (
        <p data-testid="discount">--</p>
      ) : (
        <p style={{ fontSize: '1.3vh' }} data-testid="pricediscount">
          {props.value}%{' '}
        </p>
      )}
    </>
  );
};

Discount.propTypes = {
  value: PropTypes.number,
};
export default Discount;
