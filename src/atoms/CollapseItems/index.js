import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';

const PrettoSlider = withStyles({
  root: {
    color: '#e40046',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const useStyles = makeStyles((theme) => ({
  root: {
    width: 160 + theme.spacing(3) * 2,
    marginLeft: '40px',
    marginTop: '20px',
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function valuetext(value) {
  return `${value}°C`;
}
const CollapseItems = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <PrettoSlider
        aria-labelledby="track-inverted-slider"
        marks={props.marks}
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.onchange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div className={classes.margin} />
    </div>
  );
};
CollapseItems.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  marks: PropTypes.array,
  typesofdiscount: PropTypes.array,
  value: PropTypes.number,
  onchange: PropTypes.func,
};
export default CollapseItems;
