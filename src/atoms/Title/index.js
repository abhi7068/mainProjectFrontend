import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
function Title({ children }) {
  return (
    <Typography component="h1" variant="h5">
      {children}
    </Typography>
  );
}
Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
export default Title;
