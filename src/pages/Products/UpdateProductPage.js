import React, { Component } from 'react';
import UpdateProduct from '../../organisms/Products/UpdateProduct';
import PropTypes from 'prop-types';

export default class UpdateProductPage extends Component {
  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <div>
        <UpdateProduct id={id} />
      </div>
    );
  }
}
UpdateProductPage.propTypes = {
  match: PropTypes.object,
};
