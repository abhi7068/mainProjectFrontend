import React from 'react';
import { Form } from 'formik';
import PropTypes from 'prop-types';

function FormComponent({ children, ...rest }) {
  return <Form {...rest}>{children}</Form>;
}
FormComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default FormComponent;
