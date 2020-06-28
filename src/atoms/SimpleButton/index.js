import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
function SimpleButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}
SimpleButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
export default SimpleButton;
