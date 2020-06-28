import React, { forwardRef } from 'react';

// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectAuthUIItem } from '../../store/actions/authUISelector';

import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';

import AddPointsForm from '../AddPointsForm';

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade timeout={200} ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  dialog: {
    minHeight: '420px',
    position: 'relative',
  },
  paper: {
    minHeight: '300px',
    overflowY: 'unset',
    boxShadow: 'none',
  },
  label: {
    justifyContent: 'flex-end',
  },
}));

function DialogBox({ children, open, closeDialogBox, updatePoints }) {
  const classes = useStyles();

  return (
    <Dialog
      data-testId="dialog"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={closeDialogBox}
      classes={{
        paper: classes.paper,
      }}
      BackdropProps={{ style: { backgroundColor: 'rgba(0,0,0,0.6)' } }}
    >
      <IconButton
        style={{ justifyContent: 'flex-end' }}
        onClick={closeDialogBox}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <AddPointsForm updatePoints={updatePoints} open={open} />
      </DialogContent>
    </Dialog>
  );
}

DialogBox.propTypes = {
  open: PropTypes.bool,
  closeDialogBox: PropTypes.func,
  updatePoints: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default DialogBox;
