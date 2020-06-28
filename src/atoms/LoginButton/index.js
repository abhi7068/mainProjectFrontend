import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
function ButtonForm({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}

ButtonForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
export default ButtonForm;
