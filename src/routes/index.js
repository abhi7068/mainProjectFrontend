import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../molecules/Footer/index';
import Header from '../molecules/Header/index';
import Aboutus from '../pages/Aboutus';
import Cart from '../pages/Cart';
import Contactus from '../pages/Contactus';
import Protected from './ProtectedRoutes/userProtected';
import Home from '../pages/Home/HomePage';
import LoginPage from '../pages/LoginPage';
import Mail from '../pages/Mail';
import PageNotFound from '../pages/PageNotFound';
import Profile from '../pages/Profile2.0/pro';
import Redeem from '../pages/Reedem';
import SignupPage from '../pages/SignupPage';
import ProductDescription from '../pages/DescriptionPage/index';
import ProtectedLogin from './ProtectedRoutes/loginProtection';
import SearchComponent from '../pages/SearchResult/index';
// import Profile from '../../pages/Profile/ProfilePage';
import { connect } from 'react-redux';
import { getCart } from '../store/actions/cartAction';
import SendForm from '../organisms/SendMailForm';

const Routes = (props) => {
  // eslint-disable-next-line react/prop-types
  props.getCart();

  return (
    <>
      <Header />

      <Switch>
        <Route
          path="/"
          component={(props) => <Home {...props} />}
          exact={true}
        />
        <Route
          path="/search/:keyword"
          component={(props) => <SearchComponent {...props} />}
          exact={true}
        />
        <Route
          path="/categories/:title/:id"
          component={(props) => <Home {...props} />}
          exact
        />
        <Route path="/categories/:title" component={PageNotFound} />
        {/* <Route
          Route
          exact
          path="/:category/:product"
          component={ProductDescription}
        /> */}
        <Route
          path="/:category/:product"
          component={(props) => <ProductDescription {...props} />}
          exact
        />
        <Protected
          exact
          path="/profile"
          component={(props) => <Profile {...props} />}
        />
        <Route exact path="/mail" component={Mail} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/redeem" component={Redeem} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/send/gift/:balance" component={SendForm} />
        <ProtectedLogin path="/login" component={LoginPage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => ({ userDetais: state.userDetais });

export default connect(mapStateToProps, { getCart })(Routes);
