import React from 'react';
import { ErrorMessage, Field } from 'formik';
// import TextField from "@material-ui/core/TextField";
import InputComponent from '../../atoms/InputComponent';
import PropTypes from 'prop-types';

const FormikField = ({
  name,
  label,
  type = 'text',
  required = false,
  error,
}) => {
  return (
    <Field
      required={required}
      autoComplete="off"
      as={InputComponent}
      label={label}
      name={name}
      // variant="outlined"
      // margin="normal"
      fullWidth
      type={type}
      error={error}
      helperText={<ErrorMessage name={name} />}
    />
  );
};
FormikField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  error: PropTypes.string,
};
export default FormikField;
