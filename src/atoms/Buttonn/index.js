import React from 'react';
import Button from '@material-ui/core/Button';

function Buttonn(props) {
  return (
    <div>
      <Button
        data-testid="Buttonn"
        // eslint-disable-next-line react/prop-types
        onClick={props.handleClick}
        variant="contained"
        size="small"
        color="primary"
      >
        Redeem
      </Button>
    </div>
  );
}

export default Buttonn;
