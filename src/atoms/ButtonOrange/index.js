import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// re-defining material-ui classes for button
const useStyles = makeStyles((theme) => ({
  buttonOrange: {
    background: '#fb641b',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
    color: '#fff',
    fontWeight: '500',
    height: '48px',
  },
  contained: {
    '&:hover': {
      boxShadow: '0 4px 6px 0 rgba(0,0,0,.12)',
      background: '#fb641b',
      cursor: 'pointer',
    },
  },
}));

function ButtonOrange({ children, ...rest }) {
  const classes = useStyles();
  return (
    <Button
      data-testid="ButtonOrange"
      {...rest}
      className={classes.buttonOrange}
      classes={{ contained: classes.contained }}
    >
      {children}
    </Button>
  );
}
ButtonOrange.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
export default ButtonOrange;
