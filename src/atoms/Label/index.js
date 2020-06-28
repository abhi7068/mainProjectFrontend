import React from 'react';
import { FormLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
const index = (props) => {
  return (
    <div>
      <FormLabel data-testid="label" component="legend">
        {props.name}
      </FormLabel>
    </div>
  );
};
index.propTypes = {
  name: PropTypes.string,
};
export default index;
