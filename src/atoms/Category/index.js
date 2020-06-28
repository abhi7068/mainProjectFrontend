import React from 'react';
import PropTypes from 'prop-types';
import { simpleHeading } from '../../services/kebab';

export default function index(props) {
  //
  return (
    <>
      {!(props.category && props.category.title) ? (
        <>
          <p data-testid="no-category">No Category</p>
        </>
      ) : (
        <>
          <p data-testid="category">{simpleHeading(props.category.title)}</p>
        </>
      )}
    </>
  );
}
index.propTypes = {
  category: PropTypes.object,
};
