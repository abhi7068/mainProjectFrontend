import React from 'react';
import PropTypes from 'prop-types';
function LinkComponent({ children }) {
  return (
    <div
      style={{
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '500',
        fontSize: '14px',
        margin: '0',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </div>
  );
}
LinkComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default LinkComponent;
