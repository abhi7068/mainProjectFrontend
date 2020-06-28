import React from 'react';
import Input from '../../atoms/Input';
import PropTypes from 'prop-types';

const AddProductForm = (props) => {
  return (
    <div>
      <Input
        data-testid="input1"
        name="product_name"
        type="text"
        label="Product Name"
        onModelChange={props.onModelChange}
      />
      <br />
      <br />
      <Input
        name="description"
        type="text"
        label=" Description"
        onModelChange={props.onModelChange}
      />
      <br />
      <br />
      <Input
        required="required"
        name="price"
        type="Number"
        label="Price"
        onModelChange={props.onModelChange}
      />
      <br />
      <br />
      <Input
        required="required"
        name="discount"
        type="Number"
        label="Discount"
        min="0"
        max="100"
        onModelChange={props.onModelChange}
      />
    </div>
  );
};
AddProductForm.propTypes = {
  onModelChange: PropTypes.func,
};
export default AddProductForm;
