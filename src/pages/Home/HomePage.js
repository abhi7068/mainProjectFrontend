import React from 'react';
import Products from '../../organisms/Products/index';
import PropTypes from 'prop-types';
import { simpleHeading } from '../../services/kebab';
export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <Navigationbar /> */}
        <Products
          url={this.props.match.url}
          categoryId={this.props.match.params.id || ''}
          title={simpleHeading(this.props.match.params.title || '')}
        />
      </div>
    );
  }
}
Home.propTypes = {
  match: PropTypes.object,
};
