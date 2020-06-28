import React from 'react';
import Input from '../../atoms/Input';
import PropTypes from 'prop-types';
import Label from '../../atoms/Label';

const UpdateProductForm = (props) => {
  return (
    <div>
      <Label name="Product Name" />
      <Input
        name="product_name"
        type="text"
        onModelChange={props.onModelChange}
        value={props.value.product_name}
      />
      <br />
      <Label name="Description" />
      <Input
        name="description"
        type="text"
        onModelChange={props.onModelChange}
        value={props.value.description}
      />
      <br />
      <Label name="Price" />
      <Input
        required="required"
        name="price"
        type="Number"
        onModelChange={props.onModelChange}
        value={props.value.price}
      />
      <br />
      <Label name="Discount" />
      <Input
        name="discount"
        type="Number"
        onModelChange={props.onModelChange}
        value={props.value.discount}
        min="1"
        max="100"
      />
    </div>
  );
};
UpdateProductForm.propTypes = {
  onModelChange: PropTypes.func,
  value: PropTypes.object,
  history: PropTypes.object,
};
export default UpdateProductForm;
