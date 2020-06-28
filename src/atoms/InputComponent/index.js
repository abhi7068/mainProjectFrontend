import React from 'react';
import TextField from '@material-ui/core/TextField';

function InputComponent({ ...rest }) {
  return <TextField {...rest} />;
}

export default InputComponent;
