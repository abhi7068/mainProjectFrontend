import React, { Component } from 'react';
import UpdateProductForm from '../../../molecules/UpdateProductForm';
import {
  Card,
  Select,
  MenuItem,
  FormControl,
  CardHeader,
  InputLabel,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
// import Button from "../../atoms/Button"
import {
  getProductsById,
  updateProductsById,
} from '../../../services/productService';
import { getCategories } from '../../../services/categoryServices';
import MaterialButton from '../../../atoms/MaterialButton';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      open: false,
      sendUpdateId: this.props.id,
      disabled: false,
    };
    this.updateProduct = this.updateProduct.bind(this);
    this.onModelChange = this.onModelChange.bind(this);
  }

  updateProduct(event) {
    event.preventDefault();
    updateProductsById(this.state.sendUpdateId, this.state.data).then(
      this.setState({
        open: true,
        disabled: true,
      })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    //  const { dispatch } = this.props;
    if (prevState.sendUpdateId !== this.state.sendUpdateId) {
      getProductsById(this.state.sendUpdateId).then((res) => {
        this.setState({ data: res.data });
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    //
    if (props.id !== state.sendUpdateId) {
      return { sendUpdateId: this.props.id };
    }
    return null;
  }

  onModelChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ data: { ...this.state.data, [name]: value } });
  }

  componentDidMount() {
    this.props.dispatch(getCategories());
    getProductsById(this.state.sendUpdateId).then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    const {
      categories: { data },
    } = this.props;

    //
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
          <CardHeader title="UPDATE PRODUCT" />
          <form onSubmit={this.updateProduct}>
            <UpdateProductForm
              onModelChange={this.onModelChange}
              value={this.state.data}
            />

            <FormControl className={this.props.classes.formControl}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select name="category" onClick={this.onModelChange}>
                {data.map((category, key) => (
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
              disabled={this.state.disabled}
              name="Submit"
              type="submit"
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
  id: PropTypes.string,
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
