import React from 'react';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import PropTypes from 'prop-types';

const Form = (props) => {
  return (
    <>
      <Label name="Title" />
      <Input
        type="text"
        name="title"
        onModelChange={props.onModelChange}
        value={props.value.title}
      />
    </>
  );
};
Form.propTypes = {
  onModelChange: PropTypes.func,
  value: PropTypes.object,
};
export default Form;
