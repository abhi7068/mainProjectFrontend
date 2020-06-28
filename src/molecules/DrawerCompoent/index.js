import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CollapseItems from '../../atoms/CollapseItems';
import PropTypes from 'prop-types';
import {
  getFilteredPrice,
  getFilteredDiscount,
  getFilteredRating,
  getResetFilter,
} from '../../store/actions/productAction';
import { connect } from 'react-redux';
const marksforPrice = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 3750,
    label: '3750',
  },
  {
    value: 7500,
    label: '7500',
  },
  {
    value: 15000,
    label: '15000',
  },
];
const marksforRating = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];
const marksforDiscount = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 60,
    label: '60',
  },
  {
    value: 80,
    label: '80',
  },
];
const Compo = (props) => {
  const [outcategories, setoutcategories] = React.useState(false);
  const handleFilterClickOfCategories = () => {
    setoutcategories(!outcategories);
  };
  React.useEffect(() => {
    // if (props.state.product.filterBy === 'FILTER_PRICE') {
    //   setValuePrice(props.state.product.range);
    // } else if (props.state.product.filterBy === 'FILTER_DISCOUNT') {
    //   setValueDiscount(props.state.product.range);
    // } else if (props.state.product.filterBy === 'FILTER_RATING') {
    //   setValueRating(props.state.product.range);
    // // // // } else {
    setValuePrice(props.range.FILTER_PRICE);
    setValueDiscount(props.range.FILTER_DISCOUNT);
    setValueRating(props.range.FILTER_RATING);
    // }
  }, []);
  const [valuePrice, setValuePrice] = React.useState([0, 0]);
  const [valueDiscount, setValueDiscount] = React.useState([0, 0]);
  const [valueRating, setValueRating] = React.useState([0, 0]);
  const handleChangeForPrice = (event, newValue) => {
    setValuePrice(newValue);
    props.getFilteredPrice(newValue);
  };
  const resetFilter = () => {
    setValuePrice([0, 15000]);
    setValueDiscount([0, 80]);
    setValueRating([0, 5]);
    props.getResetFilter();
  };
  const handleChangeForDiscount = (event, newValue) => {
    setValueDiscount(newValue);
    props.getFilteredDiscount(newValue);
  };

  const handleChangeForRating = (event, newValue) => {
    setValueRating(newValue);
    props.getFilteredRating(newValue);
  };
  return (
    <div>
      <ListItem
        data-testid="ListItem"
        button
        onClick={handleFilterClickOfCategories}
        style={{ color: 'black', background: '#969397' }}
      >
        <ListItemIcon style={{ color: 'Black' }}></ListItemIcon>
        <ListItemText
          primary="Filter By Price"
          style={{ color: 'white' }}
          data-testid="test-input"
        />
      </ListItem>
      <CollapseItems
        onchange={handleChangeForPrice}
        min={0}
        max={15000}
        value={valuePrice}
        marks={marksforPrice}
      />
      <ListItem
        button
        onClick={handleFilterClickOfCategories}
        style={{ color: 'black', background: '#969397' }}
      >
        <ListItemIcon style={{ color: 'Black' }}></ListItemIcon>
        <ListItemText primary="Filter By Discount" style={{ color: 'white' }} />
      </ListItem>
      <CollapseItems
        onchange={handleChangeForDiscount}
        min={1}
        max={80}
        value={valueDiscount}
        marks={marksforDiscount}
      />
      <ListItem
        button
        onClick={handleFilterClickOfCategories}
        style={{ color: 'black', background: '#969397' }}
      >
        <ListItemIcon style={{ color: 'Black' }}></ListItemIcon>
        <ListItemText primary="Filter By Rating" style={{ color: 'white' }} />
      </ListItem>
      <CollapseItems
        onchange={handleChangeForRating}
        min={0}
        max={5}
        value={valueRating}
        marks={marksforRating}
      />
      <ListItem
        button
        onClick={resetFilter}
        style={{ color: 'black', background: '#e40046' }}
      >
        <ListItemIcon style={{ color: 'Black' }}></ListItemIcon>
        <ListItemText
          primary="Remove Filters & Sorting "
          style={{ color: 'white' }}
        />
      </ListItem>
      {/* </Collapse> */}
    </div>
  );
};
Compo.propTypes = {
  primary: PropTypes.string,
  typesofdiscount: PropTypes.array,
  getFilteredPrice: PropTypes.func,
  getFilteredDiscount: PropTypes.func,
  getFilteredRating: PropTypes.func,
  state: PropTypes.array,
  getResetFilter: PropTypes.func,
  range: PropTypes.object,
};
const mapStateToProps = (state) => {
  // console.log('');
  return {
    state: state,
    categories: state.categories,
    range: state.product.range,
  };
};
export default connect(mapStateToProps, {
  getFilteredPrice,
  getFilteredDiscount,
  getFilteredRating,
  getResetFilter,
})(Compo);
