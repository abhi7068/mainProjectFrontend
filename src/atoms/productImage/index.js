import React from 'react';
import IMAGE_URL from '../../constants/IMAGE_URL';
const Images = () => {
  return (
    <figure data-testid="productImage">
      <img src={IMAGE_URL} />
    </figure>
  );
};
export default Images;
