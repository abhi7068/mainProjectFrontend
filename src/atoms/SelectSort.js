import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { sortByPrice } from '../store/actions/productAction';
import PropTypes from 'prop-types';
const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

const SelectSort = (props) => {
  const classes = useStyles();
  const [sort, setSort] = React.useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event, value) => {
    setSort(event.target.value);
    if (value.props.children === 'Sort By Price') {
      props.sortByPrice();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel
          id="demo-controlled-open-select-label"
          style={{ color: 'black' }}
        >
          Sort
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sort}
          onChange={handleChange}
        >
          <MenuItem value={10}>Sort By Price</MenuItem>
          {/* <MenuItem value={10}>Sort By Name</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state,
    filtercategory: state.filtercategory,
  };
};
SelectSort.propTypes = {
  sortByPrice: PropTypes.func,
};

export default connect(mapStateToProps, { sortByPrice })(SelectSort);
