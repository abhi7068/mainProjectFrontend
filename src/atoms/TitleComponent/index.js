import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
function Title({ children }) {
  return (
    <Typography
      data-testid="Typography"
      component="h2"
      variant="h5"
      style={{ fontSize: '29px', fontWeight: '500' }}
    >
      {children}
    </Typography>
  );
}
Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
export default Title;
