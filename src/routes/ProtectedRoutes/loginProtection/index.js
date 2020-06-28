import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedLogin = ({ component: Component, ...rest }) => {
  const getResponseDetails = localStorage.getItem('storeResponseDetails');
  const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
  const check = getResponseDetailsAfterParse
    ? getResponseDetailsAfterParse.check
    : false;
  console.log('');
  let Islogged = false;
  if (check === 200) {
    Islogged = true;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        Islogged === false ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

ProtectedLogin.propTypes = {
  component: PropTypes.string,
};
export default ProtectedLogin;
