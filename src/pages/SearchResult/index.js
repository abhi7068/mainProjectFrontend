import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../molecules/Product';
import classes from '../../organisms/Products/product.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { updateProducts } from '../../store/actions/productAction';
import { getproducts } from '../../services/productService';
import PropTypes from 'prop-types';

class index extends Component {
  componentDidMount() {
    const {
      match: {
        params: { keyword },
      },
    } = this.props;
    getproducts(keyword).then((res) =>
      this.props.dispatch(updateProducts(res.data))
    );
  }

  render() {
    const {
      match: {
        params: { keyword },
      },
    } = this.props;

    const { isLoading, productList } = this.props;
    return (
      <div style={{ marginBottom: '4em' }}>
        {isLoading ? (
          <CircularProgress disableShrink />
        ) : (
          <>
            <h3>
              Search result for{'  '}
              {keyword}
            </h3>
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
                <h2>Products not found </h2>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}
index.propTypes = {
  productList: PropTypes.array,
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool,
  match: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    productList: state.product.products,
    isLoading: state.product.isLoading,
    activeCategoryId: state.product.activeCategoryId,
  };
};
export default connect(mapStateToProps)(index);
