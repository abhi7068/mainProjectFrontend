import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
const Input = (props) => {
  /*

    */
  return (
    <TextField
      required={props.required}
      id="outlined-basic"
      type={props.type}
      name={props.name}
      label={props.label}
      placeholder={props.placeholder}
      onChange={props.onModelChange}
      value={props.value}
      variant="outlined"
      InputProps={{
        inputProps: {
          max: props.max,
          min: props.min,
        },
      }}
      style={{ width: 225 }}
    />
  );
};
Input.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onModelChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.string,
};
export default Input;
