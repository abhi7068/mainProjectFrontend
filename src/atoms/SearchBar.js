import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';
import Async from 'react-select/async';
import Product from './Manipulations/product';
import { getproducts } from '../services/productService';
import { updateProducts } from '../store/actions/productAction';
import kebab from '../services/kebab';
import PropTypes from 'prop-types';

import debounce from 'lodash/debounce';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  show: {
    width: '28vw',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    display: 'flex',

    '&:hover': {
      // backgroundColor: fade(theme.palette.common.white, 2.5),
    },
    marginLeft: 0,
    marginRight: 0,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100px',
    },
  },
}));
function SearchBar(props) {
  const [searchvalue, setValue] = useState('');
  const handleSearch = () => {
    if (searchvalue) {
      getproducts(searchvalue)
        .then((res) => props.dispatch(updateProducts(res.data)))
        .then(props.history.push(`/search/${searchvalue}`), setValue(''));
    }
  };
  const loadProducts = debounce(
    (inputValue, callback) => {
      setValue(inputValue);
      getproducts(inputValue)
        .then((json) => {
          callback(json.data.map((product) => new Product(product)));
        })
        .catch((errors) => {});
    },
    1000,
    false
  );
  const handleSelection = (value) => {
    // let {onModelChange} = this.props;
    // onModelChange({target: {value: value, name: field}});

    if (value) {
      //  props.dispatch(productDetails(value._id));
      props.history.push(
        kebab(
          `/${
            value.category && value.category._id
              ? value.category
              : 'No Category'
          }/${value._id}`
        )
      );
      setValue('');
    }
  };
  const classes = useStyles();
  return (
    <div>
      <div className={classes.search}>
        {/* <div style={{ }}> */}
        <Async
          openMenuOnClick={false}
          menuPortalTarget={document.body}
          className={classes.show}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
            NoOptionsMessage: () => 'No products ',
          }}
          loadOptions={loadProducts}
          isClearable
          value={Product}
          placeholder="Search"
          onChange={handleSelection}
        />
        {/* </div> */}
        <form onSubmit={handleSearch}>
          <IconButton aria-label="Search" onClick={handleSearch}>
            <SearchIcon
              style={{ color: 'white' }}
              className={classes.searchIcon}
            />
          </IconButton>
        </form>
      </div>
    </div>
  );
}
SearchBar.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func,
};
function mapStateToProps(state) {
  return {
    cart: state.cart,
    userDetails: state.userDetails,
  };
}
export default withRouter(connect(mapStateToProps)(SearchBar));
