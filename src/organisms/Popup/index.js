import React, { forwardRef } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAuthUIItem } from '../../store/actions/authUISelector';

import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
// import Slide from "@material-ui/core/Slide";
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

import CancelButton from '../../atoms/CancelButton';

import { closeAuthUI } from '../../store/actions/authUIAction';

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade timeout={200} ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  dialog: {
    height: '520px',
    position: 'relative',
  },
  paper: {
    overflowY: 'unset',
    boxShadow: 'none',
  },
}));

function Popup({ children, isAuthUIOpened, closeAuthUI }) {
  const classes = useStyles();

  // if You want to change Backdrop color, change in BackdropProps -> backgroundColor
  return (
    <Dialog
      open={isAuthUIOpened}
      TransitionComponent={Transition}
      keepMounted
      onClose={closeAuthUI}
      classes={{
        paper: classes.paper,
      }}
      BackdropProps={{ style: { backgroundColor: 'rgba(0,0,0,0.6)' } }}
    >
      <CancelButton onClick={closeAuthUI}>✕</CancelButton>
      {children}
    </Dialog>
  );
}

Popup.propTypes = {
  closeAuthUI: PropTypes.func,
  isAuthUIOpened: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

const mapStateToProps = createStructuredSelector({
  isAuthUIOpened: selectAuthUIItem,
});

export default connect(mapStateToProps, { closeAuthUI })(Popup);
