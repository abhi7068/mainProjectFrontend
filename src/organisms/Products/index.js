import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../molecules/Product';
import {
  getProducts,
  updateProducts,
  resetProducts,
} from '../../store/actions/productAction';
import { getProductByCategory } from '../../services/productService';
import CircularProgress from '@material-ui/core/CircularProgress';
import classes from './product.module.css';
import PropTypes from 'prop-types';
class Products extends Component {
  componentDidMount() {
    const {
      categoryId,
      updateProducts,
      getProducts,
      url,
      resetProducts,
    } = this.props;

    resetProducts();
    if (categoryId && url !== '/') {
      getProductByCategory(categoryId).then((result) => {
        updateProducts(result.data);
      });
    } else getProducts();
  }

  render() {
    const { isLoading, title, productList } = this.props;

    return (
      <div style={{ marginBottom: '4em' }}>
        {isLoading ? (
          <CircularProgress disableShrink />
        ) : (
          <>
            <h2>{title || ''}</h2>
            <div className={classes.container}>
              {productList.length ? (
                productList.map((product, i) => {
                  return (
                    <div key={product._id} className={classes.boxes}>
                      <Product product={product} />
                    </div>
                  );
                })
              ) : (
                <h2>No Products</h2>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productList: state.product.filteredLatest,
    isLoading: state.product.isLoading,
    activeCategoryId: state.product.activeCategoryId,
  };
};
Products.propTypes = {
  productList: PropTypes.array,
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool,
  categoryId: PropTypes.string,
  updateProducts: PropTypes.string,
  activeCategoryId: PropTypes.string,
  getProducts: PropTypes.func,
  resetProducts: PropTypes.func,
  url: PropTypes.string,
  title: PropTypes.string,
};
export default connect(mapStateToProps, {
  updateProducts,
  resetProducts,
  getProducts,
})(Products);
