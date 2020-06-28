import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// re-defining material-ui classes for button
const useStyles = makeStyles((theme) => ({
  buttonWhite: {
    background: '#fff',
    boxShadow: '0 4px 6px 0 rgba(0,0,0,.12)',
    color: '#2874f0',
    fontWeight: '500',
    height: '48px',
  },
  contained: {
    '&:hover': {
      color: '#2874f0',
      boxShadow: '0 4px 6px 0 rgba(0,0,0,.12)',
      background: '#fff',
      cursor: 'pointer',
    },
  },
}));

function ButtonWhite({ children, ...rest }) {
  const classes = useStyles();
  return (
    <Button
      {...rest}
      className={classes.buttonWhite}
      classes={{ contained: classes.contained }}
    >
      {children}
    </Button>
  );
}
ButtonWhite.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
export default ButtonWhite;
