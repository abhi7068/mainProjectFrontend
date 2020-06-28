import React from 'react';
import classes from './name.module.css';
import PropTypes from 'prop-types';
function Name(props) {
  return (
    <>
      <p className={classes.name} data-testid="name">
        {props.name}
      </p>
    </>
  );
}
Name.propTypes = {
  name: PropTypes.string,
};
export default Name;
