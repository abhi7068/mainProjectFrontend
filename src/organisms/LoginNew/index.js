import React, { useState, Fragment, useEffect } from 'react';

import { Formik } from 'formik';

import * as Yup from 'yup';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { Alert, AlertTitle } from '@material-ui/lab';

import LoginTitle from '../../organisms/LoginTitle';
import PropTypes from 'prop-types';

import { logInApi } from '../../services/logInServices';

import queryString from 'query-string';
import { getUserdetails } from '../../store/actions/loginAction';

import FormikField from '../../molecules/FormikField';
import LinkComponent from '../../atoms/LinkComponent';
import FormComponent from '../../atoms/FormComponent';
// import ButtonWhite from '../../atoms/ButtonWhite';
import { addToCartAfterLogin } from '../../store/actions/cartAction';
import ButtonOrange from '../../atoms/ButtonOrange';
import Divider from '../../atoms/Divider';

import { makeStyles } from '@material-ui/core/styles';

import { BASE_URL } from '../../constants/BASE_URL';
import GoogleButton from 'react-google-button';

import { closeAuthUI } from '../../store/actions/authUIAction';

// styling organism, positioning atoms on Layout
const useStyles = makeStyles((theme) => ({
  positionImage: {
    position: 'absolute',
    bottom: '30px',
    left: '16px',
  },
  formContent: {
    padding: '56px 35px 16px',
    height: 'calc(100% - 56px - 16px)',
    position: 'relative',
  },
  linkPosition: {
    left: '50%',
    transform: 'translateX(-50%)',
    position: 'absolute',
    bottom: '20px',
  },
  gridTitle: {
    background: '#2874f0',
    padding: '40px 35px',
    color: 'white',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
  },
  root: {
    position: 'absolute',
    width: '58%',
    top: ' -12%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '10',
  },
}));

// Login organism
const Login = ({ openSignup, history, location, dispatch, cart }) => {
  const classes = useStyles();

  const [message, setMessage] = useState({ error: null, success: null });

  // set initial values for login form
  const [initialValues] = useState({
    email: '',
    password: '',
  });

  // function which gets called when submit login button is pressed
  const handleLogin = (values, resetForm) => {
    logInApi(values).then((response) => {
      localStorage.setItem(
        'storeResponseDetails',
        JSON.stringify(response.data)
      );

      const getResponseDetails = localStorage.getItem('storeResponseDetails');
      const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
      const isAdmin = getResponseDetailsAfterParse.isAdmin;

      if (
        getResponseDetailsAfterParse &&
        getResponseDetailsAfterParse.status === true
      ) {
        setMessage({ success: response.data.status });
      } else setMessage({ error: 'User' });

      if (isAdmin === true && response.data.status === true) {
        history.push('/admin/dashboard');
        const getResponseDetails = localStorage.getItem('storeResponseDetails');
        const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
        dispatch(addToCartAfterLogin(cart));
        dispatch(getUserdetails(getResponseDetailsAfterParse));
        setTimeout(() => dispatch(closeAuthUI()), 300);
        resetForm({});
      }

      if (response.data.status === true && isAdmin === false) {
        // history.push('/');
        const getResponseDetails = localStorage.getItem('storeResponseDetails');
        const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);

        dispatch(getUserdetails(getResponseDetailsAfterParse));
        dispatch(addToCartAfterLogin(cart));
        setTimeout(() => dispatch(closeAuthUI()), 300);
        resetForm({});
        // console.log('XXXXXXXXXXXXXXXXXXXXXXXXXX:', message)
      }
    });
  };
  useEffect(() => {
    const query = queryString.parse(location.search);
    if (query.token) {
      window.localStorage.setItem('storeResponseDetails', query.token);
      const getResponseDetails = localStorage.getItem('storeResponseDetails');
      const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
      dispatch(getUserdetails(getResponseDetailsAfterParse));
      history.push('/');
    }
  });

  // set validation rules for Formik Fields
  const [validationSchema] = useState(
    Yup.object().shape({
      email: Yup.string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required')
        .max(35, 'Email must contain no more then 35 characters')
        .matches(
          /^[A-Za-z].*$/,
          'Email should not start with number or special char'
        ),
      password: Yup.string('Enter a Password')
        .min(8, 'Password must contain at least 8 characters')
        .max(20, 'Password must contain no more then 20 characters')
        .required('Enter your password')
        .matches(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]).{8,20}/,
          'Password must contain at least one uppercase,number,special char'
        )
        .matches(/^[A-Z]/, 'Password must start with upper case'),
    })
  );

  return (
    <Fragment>
      <Grid item xs={5} className={classes.gridTitle}>
        <LoginTitle />
      </Grid>
      <Grid item xs={7}>
        <Fragment>
          {message && message.error && (
            <Alert severity="error" classes={{ root: classes.root }}>
              <AlertTitle>Error Invalid User</AlertTitle>
              {/* {message.error} */}
            </Alert>
          )}
          {message && message.success && (
            <Alert severity="success" classes={{ root: classes.root }}>
              <AlertTitle>Success</AlertTitle>
              {message.success}
            </Alert>
          )}
        </Fragment>
        <div className={classes.formContent}>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              handleLogin(values, resetForm);
              // resetForm();
            }}
            validationSchema={validationSchema}
          >
            {({ touched, errors }) => {
              return (
                <FormComponent noValidate>
                  <FormikField
                    name="email"
                    label="Email"
                    required
                    error={touched.email && Boolean(errors.email)}
                    autoFocus
                  />
                  <FormikField
                    name="password"
                    type="password"
                    label="Password"
                    error={touched.password && Boolean(errors.password)}
                    required
                  />
                  <ButtonOrange
                    variant="contained"
                    type="submit"
                    fullWidth
                    style={{ marginTop: '36px' }}
                  >
                    Login
                  </ButtonOrange>
                  <Divider>OR</Divider>
                  <div className="App">
                    <a
                      href={`${BASE_URL}/google/auth/google`}
                      className="button"
                      onClick={() => history.push('/')}
                    >
                      <GoogleButton style={{ margin: '0 auto' }} />
                    </a>
                  </div>
                  {/* <ButtonWhite
                variant="contained"
                fullWidth
                onClick={LoginWithGoogleOrFacebook}
              >
                Login with Google/Facebook
              </ButtonWhite> */}

                  <LinkComponent>
                    <div
                      onClick={openSignup}
                      className={classes.linkPosition}
                      style={{
                        textDecoration: 'none',
                        color: '#2874f0',
                        cursor: 'pointer',
                      }}
                    >
                      New User? Create an account{' '}
                    </div>
                  </LinkComponent>
                </FormComponent>
              );
            }}
          </Formik>
        </div>
      </Grid>
    </Fragment>
  );
};

Login.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func,
  location: PropTypes.object,
  closeAuthUI: PropTypes.func,
  openSignup: PropTypes.func,
  cart: PropTypes.array,
};
function mapStateToProps(state) {
  return {
    userDetails: state,
    cart: state.cart,
  };
}
export default withRouter(connect(mapStateToProps)(Login));
