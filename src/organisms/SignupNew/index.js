import React, { useState, Fragment } from 'react';

import { Formik } from 'formik';

import * as Yup from 'yup';

import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import { signUpApi } from '../../services/signUpServices';

import SignupTitle from '../../organisms/SignupTitle';
import FormikField from '../../molecules/FormikField';
import FormComponent from '../../atoms/FormComponent';
import ButtonOrange from '../../atoms/ButtonOrange';
import ButtonWhite from '../../atoms/ButtonWhite';

import PropTypes from 'prop-types';

import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import { closeAuthUI } from '../../store/actions/authUIAction';

// styling organism, positioning atoms on Layout
const useStyles = makeStyles((theme) => ({
  positionImage: {
    position: 'absolute',
    bottom: '30px',
    left: '16px',
  },
  formContent: {
    padding: '16px 35px 16px',
    height: 'calc(100% - 26px - 16px)',
    position: 'relative',
  },
  link: {
    textDecoration: 'none',
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

// Signup organism
const Signup = ({ openLogin, closeAuthUI }) => {
  const classes = useStyles();
  const [message, setMessage] = useState({ error: '', success: '' });

  // set validation rules for Signup Fields
  const [validationSchema] = useState(
    Yup.object().shape({
      name: Yup.string(
        'Enter full name as alphabets only, no numbers and special characters should be given'
      )
        .min(2, 'Name must contain at least 2 characters')
        .max(30, 'Name must contain no more then 20 characters')
        .required('Name is required'),
      email: Yup.string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required')
        .max(35, 'Email must contain no more then 35 characters')
        .matches(
          /^[A-Za-z].*$/,
          'Email should not start with number orspecial character'
        ),
      confirmEmail: Yup.string('Enter your email')
        .required('Confirm your email')
        .oneOf([Yup.ref('email')], 'Email does not match')
        .max(35, 'Email must contain no more then 35 characters'),
      password: Yup.string('Enter a Password')
        .min(8, 'Password must contain at least 8 characters')
        .max(20, 'Password must contain no more then 20 characters')
        .required('Enter your password')
        .matches(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]).{8,20}/,
          'Password must contain at least one uppercase,number,special char'
        )
        .matches(/^[A-Z]/, 'Password must start with upper case'),
      confirmPassword: Yup.string('Enter a password')
        .required('Confirm your password')
        .oneOf([Yup.ref('password')], 'Enter correct password'),
    })
  );

  // set initial values for signup form
  const [initialValues] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });

  // function which gets called when submit signup button is pressed
  const handleSignup = (values, resetForm) => {
    signUpApi(values).then((response) => {
      if (response && response.status === 200) {
        if (
          response.data[0] &&
          response.data[0].msg === 'E-mail already in use'
        ) {
          setMessage({ error: response.data[0].msg });
        } else {
          setMessage({ success: 'User signed up' });
          // resetForm({});
          // props.history.push('/login');
          setTimeout(() => openLogin(), 300);
        }
      } else {
        setMessage({ error: 'CANNOT SIGNUP' });
      }
    });
    // close popup
    // closeAuthUI()
  };
  return (
    <Fragment>
      <Grid item xs={5} className={classes.gridTitle}>
        <SignupTitle />
      </Grid>
      <Grid item xs={7}>
        <Fragment>
          {message && message.error && (
            <Alert severity="error" classes={{ root: classes.root }}>
              <AlertTitle>Error {message.error}</AlertTitle>
            </Alert>
          )}
          {message && message.success && (
            <Alert severity="success" classes={{ root: classes.root }}>
              <AlertTitle>Success {message.success}</AlertTitle>
            </Alert>
          )}
        </Fragment>

        <div className={classes.formContent}>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              handleSignup(values, resetForm);
            }}
            validationSchema={validationSchema}
          >
            {({ touched, errors }) => {
              return (
                <FormComponent noValidate>
                  <FormikField
                    name="name"
                    label="Name"
                    required
                    error={touched.name && Boolean(errors.name)}
                  />
                  <FormikField
                    name="email"
                    label="Email"
                    required
                    error={touched.email && Boolean(errors.email)}
                  />
                  <FormikField
                    name="confirmEmail"
                    label="Confirm email"
                    required
                    error={touched.confirmEmail && Boolean(errors.confirmEmail)}
                  />
                  <FormikField
                    name="password"
                    type="password"
                    label="Password"
                    error={touched.password && Boolean(errors.password)}
                    required
                  />
                  <FormikField
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    required
                  />

                  <ButtonOrange
                    variant="contained"
                    type="submit"
                    fullWidth
                    style={{ margin: '36px 0 16px 0' }}
                  >
                    Signup
                  </ButtonOrange>
                  <ButtonWhite
                    fullWidth
                    style={{ textTransform: 'none' }}
                    onClick={openLogin}
                  >
                    Existing User? Signin
                  </ButtonWhite>
                </FormComponent>
              );
            }}
          </Formik>
        </div>
      </Grid>
    </Fragment>
  );
};

Signup.propTypes = {
  closeAuthUI: PropTypes.func,
  openLogin: PropTypes.func,
};

export default connect(null, {
  closeAuthUI,
})(Signup);
