import React, { Component } from 'react';
import UpdateCategory from '../../organisms/Categories/UpdateCategory';
import PropTypes from 'prop-types';

export default class UpdateCategoryPage extends Component {
  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <div>
        <UpdateCategory id={id} />
      </div>
    );
  }
}
UpdateCategoryPage.propTypes = {
  match: PropTypes.object,
};
