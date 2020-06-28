import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { getUserdetails } from '../../store/actions/loginAction';
import { resetCart } from '../../store/actions/cartAction';
import { connect } from 'react-redux';
// import { removeall } from '../../store/actions/cartAction';
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    // '&:focus': {
    //   backgroundColor: theme.palette.primary.main,
    //   '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //     color: theme.palette.common.white,
    //   },
    // },
  },
}))(MenuItem);

function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuId = 'primary-search-account-menu';
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
    <div>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        color="inherit"
        style={{ color: 'white', textTransform: 'none' }}
        // aria-controls="customized-menu"
        // aria-haspopup="true"
        // color="while"
        onClick={handleClick}
      >
        <AccountCircle />
      </IconButton>
      {/* <Button
        style={{ color: 'white', textTransform: 'none' }}
        aria-controls="customized-menu"
        aria-haspopup="true"
        // color="while"
        onClick={handleClick}
      >
        Profile
      </Button> */}
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem
          button
          onClick={() => {
            props.history.push('/profile');
            setAnchorEl(null);
          }}
        >
          <ListItemIcon>
            <PermIdentityIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit Profile" />
        </StyledMenuItem>
        <StyledMenuItem button onClick={logout}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    userDetails: state.userDetails,
  };
}
CustomizedMenus.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func,
};

export default withRouter(connect(mapStateToProps)(CustomizedMenus));
