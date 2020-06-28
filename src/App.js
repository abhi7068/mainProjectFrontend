import React from 'react';
// import logo from './logo.svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthPage from './pages/Auth/AuthPage';
import './App.css';
import Routes from './routes/routes';
const App = ({ isAuthUIOpened }) => {
  return (
    <div className="App">
      <Routes />
      {isAuthUIOpened && <AuthPage />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthUIOpened: state.authUI.isAuthUIOpened,
});
App.propTypes = {
  isAuthUIOpened: PropTypes.array,
};
export default connect(mapStateToProps)(App);
