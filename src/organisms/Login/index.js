import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert, AlertTitle } from '@material-ui/lab';
import ButtonComponent from '../../atoms/LoginButton';
import FormikField from '../../molecules/FormikField';
import LinkComponent from '../../atoms/Link';
import PropTypes from 'prop-types';
import { loginApi } from '../../services/logInServices';
import queryString from 'query-string';
import { addToCartAfterLogin } from '../../store/actions/cartAction';
import { getUserdetails } from '../../store/actions/loginAction';
import './style.css';
// import './App.css';
import { BASE_URL } from '../../constants/BASE_URL';
import GoogleButton from 'react-google-button';
const initialValues = {
  email: '',
  password: '',
};

const LoginSchema = Yup.object().shape({
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
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]).{6,20}/,
      'Password must contain at least one uppercase,number,special char'
    )
    .matches(/^[A-Z]/, 'Password must start with upper case'),
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',

    '& > * + *': {
      marginTop: theme.spacing(1),
      alignItems: 'left',
    },
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [message, setMessage] = useState({ error: '', success: '' });
  const handleSubmit = (values) => {
    // console.error(values);

    props.loginApi(values).then((response) => {
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
        setMessage({ success: response.data.message });
      } else setMessage({ error: 'User' });
      if (isAdmin === true && response.data.status === true) {
        props.history.push('/admin/dashboard');
      }
      if (response.data.status === true && isAdmin === false) {
        props.addToCartAfterLogin(props.cart);
        props.history.push('/');
      }
    });
  };
  useEffect(() => {
    const query = queryString.parse(props.location.search);
    if (query.token) {
      window.localStorage.setItem('storeResponseDetails', query.token);
      const getResponseDetails = localStorage.getItem('storeResponseDetails');
      const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
      props.getUserdetails(getResponseDetailsAfterParse);
      // console.error(getResponseDetailsAfterParse);

      props.history.push('/');
    }
  });

  return (
    <div>
      {message && message.error ? (
        <Alert severity="error">
          <AlertTitle>Invalid User</AlertTitle>
          {/* {message.error} */}
        </Alert>
      ) : (
        ''
      )}
      {message && message.success ? (
        <Alert className={classes.root} severity="success">
          <AlertTitle>Success</AlertTitle>
          {message.success}
        </Alert>
      ) : (
        ''
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({ dirty, isValid, resetForm }) => {
          return (
            <Form style={{ width: '300px', maxWidth: '300px' }}>
              <FormikField name="email" label="Email" required />
              <FormikField
                name="password"
                type="password"
                label="Password"
                // style={{ overflowX: 'auto' }}
                required
              />
              <br />
              <br />
              <ButtonComponent
                variant="contained"
                color="primary"
                disabled={!dirty || !isValid}
                type="submit"
              >
                Login
              </ButtonComponent>
              &nbsp;
              <ButtonComponent
                variant="contained"
                type="reset"
                color="primary"
                onClick={resetForm}
              >
                Reset
              </ButtonComponent>
              <br />
              <br />
              <LinkComponent>
                New User? &#160;
                <Link to="/signup">
                  <span className="change">Sign up here</span>
                </Link>
              </LinkComponent>
              <br />
              <br />
            </Form>
          );
        }}
      </Formik>

      <div className="App">
        <a href={`${BASE_URL}/google/auth/google`} className="button">
          <GoogleButton style={{ margin: '0 auto' }} />
        </a>
      </div>
    </div>
  );
};
Login.propTypes = {
  history: PropTypes.object,
  getUserdetails: PropTypes.func,
  cart: PropTypes.array,
  loginApi: PropTypes.func,
  addToCartAfterLogin: PropTypes.func,
  location: PropTypes.object,
};
function mapStateToProps(state) {
  return {
    userDetails: state,
    cart: state.cart,
  };
}
export default withRouter(
  connect(mapStateToProps, { addToCartAfterLogin, getUserdetails, loginApi })(
    Login
  )
);
