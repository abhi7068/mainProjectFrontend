import React, { useEffect } from 'react';
import SearchBar from '../../atoms/SearchBar';
import Buttonn from '../../atoms/Buttonn';
import CartBadge from '../../atoms/Badge';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileMenu from '../ProfileMenu';
import { getUserdetails } from '../../store/actions/loginAction';
import { openAuthUI } from '../../store/actions/authUIAction';
import { useMediaQuery } from '@material-ui/core';
import MenuBar from '../../atoms/HeaderMenu';
// import { getProducts, resetProducts } from '../store/actions/productAction';
import logo from '../../images/yoyo-logo.png';
import logoMob from '../../images/yoyo-logo-mob.png';
import Button from '@material-ui/core/Button';
import TemporaryDrawer from '../TemporaryDrawer';
import queryString from 'query-string';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RedeemForm from '../../organisms/redeemForm';
import SnackBar from '../../atoms/SnackBar';

const useStyles = makeStyles((theme) => ({
  toolbarButtons: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },

  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'center',
    // alignItems: 'flex-end',
    overflowX: 'hidden',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  coloring: {
    background: '#E40046 ',
    height: '70px',
    paddingTop: '10px',
  },
  whiteColor: {
    color: 'white',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Header = (props) => {
  const [isRedeem, setIsRedeem] = React.useState(false);
  const [isSnack, showSnackbar] = React.useState(false);
  const mobileView = useMediaQuery('(max-width:460px)');
  const bigscreen = useMediaQuery('(min-width:460px)');
  useEffect(() => {
    const getResponseDetails = localStorage.getItem('storeResponseDetails');
    const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
    //
    // props.getUserdetails(getResponseDetailsAfterParse);
    props.dispatch(getUserdetails(getResponseDetailsAfterParse));

    const query = queryString.parse(props.location);
    if (query && query.token) {
      window.localStorage.setItem('storeResponseDetails', query.token);
      const getResponseDetails = localStorage.getItem('storeResponseDetails');
      const getResponseDetailsAfterParse = JSON.parse(getResponseDetails);
      props.dispatch(getUserdetails(getResponseDetailsAfterParse));
      props.history.push('/');
    }
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.coloring}>
      {isSnack && (
        <SnackBar path="/profile" name="Gift Redeemed Successfully" />
      )}

      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {/* <StyledLink to="/" innerText="Home"></StyledLink> */}
        <TemporaryDrawer />
        {mobileView ? (
          <Link to="/">
            <img src={logoMob} height="50px" />
          </Link>
        ) : (
          <Link to="/">
            <img src={logo} height="50px" />
          </Link>
        )}

        <div style={{ marginLeft: '40px' }}>
          {' '}
          <SearchBar />
        </div>

        <div className={classes.toolbarButtons}>
          {bigscreen && (
            <>
              <div style={{ marginRight: '20px' }}>
                <Buttonn handleClick={() => setIsRedeem(true)} />
              </div>
              <div style={{ marginRight: '20px' }}>
                <Link to="/cart">
                  <CartBadge value={props.cart.length} />
                </Link>
              </div>

              {props.userDetails ? (
                props.userDetails.data ? (
                  props.userDetails.data.status === true ? (
                    <ProfileMenu />
                  ) : (
                    <Button
                      className={classes.whiteColor}
                      onClick={() => props.dispatch(openAuthUI())}
                    >
                      Login | SignUp
                    </Button>
                  )
                ) : (
                  <Button
                    className={classes.whiteColor}
                    onClick={() => props.dispatch(openAuthUI())}
                  >
                    Login | SignUp
                  </Button>
                )
              ) : (
                <Button
                  className={classes.whiteColor}
                  onClick={() => props.dispatch(openAuthUI())}
                >
                  Login | SignUp
                </Button>
              )}
            </>
          )}

          {mobileView && <MenuBar />}
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={isRedeem}
          onClose={() => {
            setIsRedeem(false);
          }}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={isRedeem}>
            <div className={classes.paper}>
              <RedeemForm
                isRedeemed={(message) => {
                  showSnackbar(message);
                  setIsRedeem(false);
                }}
              />
            </div>
          </Fade>
        </Modal>
      </Toolbar>
    </div>
  );
};
Header.propTypes = {
  cart: PropTypes.array,
  dispatch: PropTypes.func,
  userDetails: PropTypes.object,
  // resetProducts: PropTypes.func,
  // getProducts: PropTypes.func,
  getUserdetails: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
};
function mapStateToProps(state) {
  return {
    cart: state.cart,
    userDetails: state.userDetails,
  };
}
export default connect(mapStateToProps)(Header);
