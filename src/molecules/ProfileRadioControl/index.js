import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Label from '../../atoms/Label';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';

const index = props => {
  return (
    <FormControl component="fieldset">
      <Label name="Gender" />
      <RadioGroup
        aria-label="gender"
        name="gender1"
        // value={value}
        onChange={props.handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
};
index.propTypes = {
  handleChange: PropTypes.func,
};

export default index;
