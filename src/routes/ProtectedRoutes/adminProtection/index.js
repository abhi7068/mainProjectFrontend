import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Protected = ({ component: Component, ...rest }) => {
  const getResponseDetails = localStorage.getItem('storeResponseDetails');
  const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
  const isAdmin = getResponseDetailsAfterParse
    ? getResponseDetailsAfterParse.isAdmin
    : false;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

Protected.propTypes = {
  component: PropTypes.string,
};
export default Protected;
