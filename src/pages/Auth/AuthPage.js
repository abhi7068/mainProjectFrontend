import React, { useState } from 'react';

// import { connect } from 'react-redux';

// import { createStructuredSelector } from 'reselect';

// import PropTypes from 'prop-types';

// import { selectAuthUIItem } from '../../store/actions/authUISelector';
// import { closeAuthUI } from '../../store/actions/authUIAction';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Popup from '../../organisms/Popup';

// import LoginPage from './LoginPage';
// import SignupPage from './SignupPage';

import Login from '../../organisms/LoginNew';
import Signup from '../../organisms/SignupNew';

// page styling, positioning atoms on layout
const useStyles = makeStyles((theme) => ({
  dialog: {
    height: '520px',
    position: 'relative',
  },
  gridTitle: {
    background: '#2874f0',
    padding: '40px 35px',
    color: 'white',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
  },
  paper: {
    overflowY: 'unset',
  },
}));

function AuthPage() {
  const classes = useStyles();

  // set open property to open/close dialog
  // const [open, setOpen] = useState(openAuthUI);
  const [loginOrSignup, setLoginOrSignup] = useState(true);
  // when component is rendered set property open in order automatically open Dialog when page loads
  // useEffect(() => {
  //   setOpen(true);
  // }, []);

  const openLogin = () => {
    setLoginOrSignup(true);
  };

  const openSignup = () => {
    setLoginOrSignup(false);
  };
  // set open to false to close the Dialog
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Container maxWidth="sm">
      <Popup>
        <Grid container className={classes.dialog}>
          {loginOrSignup ? (
            <Login openSignup={openSignup} />
          ) : (
            <Signup openLogin={openLogin} />
          )}
        </Grid>
      </Popup>
    </Container>
  );
}

// const mapStateToProps = createStructuredSelector({
//   isAuthUIOpened: selectAuthUIItem,
// });

export default AuthPage;
