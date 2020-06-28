import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikField from '../../molecules/FormikField';
import { signUpApi } from '../../services/signUpServices';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';
import LinkComponent from '../../atoms/Link';
import './style.css';

const initialValues = {
  name: '',
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
};

const SignupSchema = Yup.object().shape({
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
      // @#$%|!*>_<={+/,.";:'&()}?^~`-
      'Password must contain at least one uppercase,one number, one special character'
    )
    .matches(/^[A-Z]/, 'Password must start withupper case'),
  confirmPassword: Yup.string('Enter a password')
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Enter correct password'),
});

const Signup = () => {
  const [message, setMessage] = useState({ error: '', success: '' });
  const handleSubmit = (values, { resetForm }) => {
    signUpApi(values).then((response) => {
      if (response && response.status === 200) {
        setMessage({ success: response.data.message });
        resetForm({});
        // props.history.push('/login');
      } else setMessage({ error: 'CANNOT SIGNUP' });
    });
  };

  return (
    <div style={{ paddingBottom: '2em' }}>
      {message && message.error ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {message.error}
        </Alert>
      ) : (
        ''
      )}

      {message && message.success ? (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          {message.success}
        </Alert>
      ) : (
        ''
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ dirty, isValid, resetForm }) => {
          return (
            <Form>
              <FormikField name="name" label="Name" required />
              <FormikField name="email" label="Email" required />
              <FormikField name="confirmEmail" label="Confirm email" required />
              <FormikField
                name="password"
                type="password"
                label="Password"
                required
              />
              <FormikField
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                required
              />
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                disabled={!dirty || !isValid}
                type="submit"
              >
                Signup
              </Button>
              &nbsp;
              <Button
                data-testid="Reset"
                variant="contained"
                type="reset"
                color="primary"
                onClick={resetForm}
              >
                Reset
              </Button>
              <br />
              <br />
              <LinkComponent>
                Already have an account?&#160;
                <Link to="/login">
                  <span className="change">Login</span>
                </Link>
              </LinkComponent>
              <br />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Signup;
