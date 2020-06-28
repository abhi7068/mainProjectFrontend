import React, { Component } from 'react';
import AddProductForm from '../../../molecules/AddProductForm';
import {
  Card,
  Select,
  MenuItem,
  CardHeader,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
// import Button from "../../atoms/Button"
import { addProduct } from '../../../services/productService';
import { getCategories } from '../../../services/categoryServices';
import MaterialButton from '../../../atoms/MaterialButton';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SnackBar from '../../../atoms/SnackBar';
import { connect } from 'react-redux';
const styles = {
  root: {
    width: '500px',
    height: '500px',
    margin: '10% auto',
  },
  label: {
    textTransform: 'capitalize',
  },
  display: {
    margin: '5% ',
  },
  formControl: {
    minWidth: 225,
  },
};

class index extends Component {
  constructor() {
    super();
    this.state = { data: {}, open: false, disabled: false };
    this.submitProduct = this.submitProduct.bind(this);
    this.onModelChange = this.onModelChange.bind(this);
  }

  submitProduct(event) {
    event.preventDefault();

    addProduct(this.state.data).then(
      this.setState({
        open: true,
        disabled: true,
      })
    );
  }

  onModelChange(event) {
    const name = event.target.name;

    const value = event.target.value;
    this.setState({ data: { ...this.state.data, [name]: value } });
  }

  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  render() {
    return (
      <div>
        {this.state.open && (
          <SnackBar path="/admin/listproducts" name="Product Saved" />
        )}
        <Card
          classes={{
            root: this.props.classes.root,
          }}
        >
          <CardHeader title="ADD PRODUCT" />

          <form onSubmit={this.submitProduct}>
            <AddProductForm onModelChange={this.onModelChange} />
            {/*  Category:
          <Select name="category" onClick={this.onModelChange}>
            {this.state.categories.map((category, key) => (
              <MenuItem value={category._id} key={key}>
                {category.title}{' '}
              </MenuItem>
            ))}
          </Select> */}
            <FormControl className={this.props.classes.formControl}>
              <InputLabel>Category</InputLabel>
              <Select name="category" onClick={this.onModelChange}>
                {this.props.categories.data.map((category, key) => (
                  <MenuItem value={category._id} key={key}>
                    {category.title}{' '}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <br />
            <MaterialButton
              data-testId="button"
              type="submit"
              disabled={this.state.disabled}
              name="Submit"
              // click={this.submitProduct}
            />
          </form>
        </Card>
      </div>
    );
  }
}
index.propTypes = {
  classes: PropTypes.object,
  root: PropTypes.object,
  display: PropTypes.object,
  history: PropTypes.object,
  dispatch: PropTypes.func,
  categories: PropTypes.array,
};
function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(index)));
