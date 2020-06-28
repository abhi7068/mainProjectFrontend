import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const index = (props) => {
  return (
    <div>
      <Button
        data-testid="button"
        type={props.type}
        disabled={props.disabled}
        variant="contained"
        color="primary"
        onClick={props.click}
      >
        {props.name}
      </Button>
    </div>
  );
};
index.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  click: PropTypes.func,
  type: PropTypes.string,
};
export default index;
