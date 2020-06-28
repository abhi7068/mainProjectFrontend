import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../../molecules/ProductDetails/ProductDetails';
import PropTypes from 'prop-types';
/* import axios from 'axios'; */
class index extends Component {
  render() {
    const {
      product: { products },
    } = this.props;
    //
    return (
      <div>
        <div>
          <Product details={products} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};
index.propTypes = {
  product: PropTypes.object,
};
export default connect(mapStateToProps)(index);

/* class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
       product:[]
    }
  }
  componentDidMount() {

  /*   axios.get() */
/*   }
  render() {

    return (
      <div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {

  return {
    product: state

  };
};
index.propTypes = {
  product: PropTypes.object,
};
export default connect(mapStateToProps)(index);  */
