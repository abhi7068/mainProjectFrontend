import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Protected = ({ component: Component, ...rest }) => {
  const getResponseDetails = localStorage.getItem('storeResponseDetails');
  const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
  const accessToken = getResponseDetailsAfterParse
    ? getResponseDetailsAfterParse.accessToken
    : false;

  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

Protected.propTypes = {
  component: PropTypes.string,
};
export default Protected;
