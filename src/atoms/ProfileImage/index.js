import React from 'react';
import IMAGE_URL from '../../constants/PROFILE_IMAGE_URL';
const Images = () => {
  return (
    <figure>
      <img alt="profile" height="50px" width="100px" src={IMAGE_URL} />
    </figure>
  );
};
export default Images;
