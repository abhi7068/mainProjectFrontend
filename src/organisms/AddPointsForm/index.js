import React, { Fragment, useState, useEffect } from 'react';
import FormikField from '../../molecules/FormikField';
import SimpleButton from '../../atoms/SimpleButton';
import * as Yup from 'yup';
import { Formik } from 'formik';
import FormComponent from '../../atoms/FormComponent';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
const useStyles = makeStyles({
  root: {
    // position: 'absolute',
    // width: '58%',
    // top: ' -12%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '10',
    margin: '20px',
  },
});

function AddPointsForm({ updatePoints, open }) {
  const classes = useStyles();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setMessage(null);
  }, [open]);

  // reset error on blur
  // const [resetError, setResetError] = useState(true)

  // set initial values for login form
  const [initialValues] = useState({
    points: '',
  });

  // function which gets called when submit login button is pressed
  const handleSubmit = (value, resetForm) => {
    updatePoints(value.points / 5);
    setMessage(`${value.points / 5} Points successfully added`);
    resetForm({});
  };

  // set validation rules for Formik Fields
  const [validationSchema] = useState(
    Yup.object().shape({
      points: Yup.number()
        .typeError('Amount must be number')
        .positive('Amount must be positive')
        .integer('Amount must be a whole number')
        .moreThan(0, 'Amount must be greater than 0')
        .max(5001, 'Amount must be less than 5000')
        .test(
          'Amount divided by five',
          'Amount must be a multiple of 5',
          function (value) {
            if (typeof value === 'undefined') return true;
            return value && value % 5 === 0;
          }
        ),
    })
  );

  return (
    <Fragment>
      <Formik
        validateOnBlur={true}
        initialValues={initialValues}
        onSubmit={(value, { resetForm }) => {
          handleSubmit(value, resetForm);
          // resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ touched, errors }) => {
          return (
            <FormComponent noValidate>
              <FormikField
                name="points"
                label="Add Amount"
                required
                error={touched.points && Boolean(errors.points)}
                autoFocus
              />
              <SimpleButton
                data-testid="simple"
                style={{
                  float: 'right',
                  backgroundColor: 'skyblue',
                  marginTop: '36px',
                }}
                variant="contained"
                size="small"
                type="submit"
              >
                Add Points
              </SimpleButton>
            </FormComponent>
          );
        }}
      </Formik>
      <Grid container>
        {message && (
          <Alert severity="success" classes={{ root: classes.root }}>
            <AlertTitle>{message}</AlertTitle>
          </Alert>
        )}
      </Grid>
    </Fragment>
  );
}

AddPointsForm.propTypes = {
  updatePoints: PropTypes.string,
  open: PropTypes.bool,
};

export default AddPointsForm;
