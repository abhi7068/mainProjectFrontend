import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      background: 'transparent',
      transition: 'none',
    },
    '&:active': {
      transition: 'none',
      boxShadow: 'none',
      background: 'transparent',
    },
  },
  cancelButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '32px',
    lineHeight: '1',
    verticalAlign: 'top',
    position: 'absolute',
    top: '-5px',
    right: '-50px',
    '&hover': {
      cursor: 'pointer',
    },
  },
}));

function CancelButton({ children, ...rest }) {
  const classes = useStyles();
  return (
    <Button
      {...rest}
      className={classes.cancelButton}
      classes={{ root: classes.root }}
    >
      {children}
    </Button>
  );
}
CancelButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default CancelButton;
