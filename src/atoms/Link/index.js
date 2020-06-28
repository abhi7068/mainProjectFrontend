import React from 'react';

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

function LinkComponent({ children }) {
  return (
    <Typography data-testid="hello" variant="body2" mx={20}>
      {children}
    </Typography>
  );
}
LinkComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
export default LinkComponent;
