// import React from 'react';
import Description from '../../organisms/Products/ProductDescripton/index';
import React, { Component } from 'react';
import { getProductsById } from '../../services/productService';
import { updateProducts } from '../../store/actions/productAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class index extends Component {
  componentDidMount() {
    const {
      match: {
        params: { product },
      },
    } = this.props;
    getProductsById(product).then((res) =>
      this.props.dispatch(updateProducts(res.data))
    );
  }

  render() {
    const {
      match: {
        // eslint-disable-next-line no-unused-vars
        params: { product },
      },
    } = this.props;

    return (
      <div>
        <Description />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    // userDetails: state.userDetails,
  };
}
index.propTypes = {
  match: PropTypes.object,

  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(index);
