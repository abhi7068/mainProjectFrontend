import React from 'react';
import { Form } from 'formik';
import PropTypes from 'prop-types';
function FormComponent({ children }) {
  return <Form data-testid="form">{children}</Form>;
}
FormComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
export default FormComponent;
