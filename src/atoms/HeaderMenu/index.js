import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListItem, List } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import { getUserdetails } from '../../store/actions/loginAction';
import MoreIcon from '@material-ui/icons/MoreVert';
import Modal from '@material-ui/core/Modal';
import { resetCart } from '../../store/actions/cartAction';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RedeemForm from '../../organisms/redeemForm';
import { makeStyles } from '@material-ui/core/styles';
import SnackBar from '../SnackBar';

const useStyles = makeStyles((theme) => ({
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
function SimpleMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isSnack, showSnackbar] = React.useState(false);
  const [isRedeem, setIsRedeem] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    localStorage.removeItem('storeResponseDetails');
    props.dispatch(getUserdetails());
    props.dispatch(resetCart());

    props.history.push('/');
  };

  return (
    <div data-testid="isSnack">
      {isSnack && (
        <SnackBar path="/profile" name="Gift Redeemed Successfully" />
      )}

      <Button
        id="button1"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreIcon style={{ color: 'white' }} />
      </Button>
      <Menu
        id="simple-menu"
        data-testid="anchorEl"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem onClick={handleClose}>
          <List>
            <ListItem button>
              <Link to="/">Home</Link>
            </ListItem>
          </List>
        </MenuItem> */}

        {props.userDetails ? (
          props.userDetails.data ? (
            props.userDetails.data.status === true ? (
              <>
                <MenuItem onClick={handleClose}>
                  <List>
                    <ListItem button>
                      <Link to="/profile">Profile</Link>
                    </ListItem>
                  </List>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <List>
                    <ListItem button onClick={logout}>
                      <ListItemText primary="Logout" />
                    </ListItem>
                  </List>
                </MenuItem>
              </>
            ) : (
              <MenuItem onClick={handleClose}>
                <List>
                  <ListItem button>
                    <Link to="/login" innerText="Login">
                      Login
                    </Link>
                  </ListItem>
                </List>
              </MenuItem>
            )
          ) : (
            <MenuItem onClick={handleClose}>
              <List>
                <ListItem button>
                  <Link to="/login" innerText="Login">
                    Login
                  </Link>
                </ListItem>
              </List>
            </MenuItem>
          )
        ) : (
          <MenuItem onClick={handleClose}>
            <List>
              <ListItem button>
                <Link to="/login" innerText="Login">
                  Login | Signup
                </Link>
              </ListItem>
            </List>
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>
          <List>
            <ListItem button>
              <Link to="/cart">
                {/* <CartBadge style={{ color: 'black' }} value={props.cart.length} /> */}
                Cart
              </Link>
            </ListItem>
          </List>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <List>
            <ListItem button onClick={() => setIsRedeem(true)}>
              {/* <CartBadge style={{ color: 'black' }} value={props.cart.length} /> */}
              Redeem
            </ListItem>
          </List>
        </MenuItem>
      </Menu>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isRedeem}
        onClose={() => setIsRedeem(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade data-testid="isRedeem" in={isRedeem}>
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
    </div>
  );
}
SimpleMenu.propTypes = {
  cart: PropTypes.array,
  userDetails: PropTypes.object,
  history: PropTypes.object,
  dispatch: PropTypes.func,
};
function mapStateToProps(state) {
  //
  return {
    cart: state.cart,
    userDetails: state.userDetails,
  };
}
export default withRouter(connect(mapStateToProps)(SimpleMenu));
