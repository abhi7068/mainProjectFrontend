import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import StyledLink from '../StyledLink';
const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-around',
    height: '50px',

    position: 'fixed',
    bottom: '0',
    background: '#E40046',
    width: '100%',
    fontSize: '09px',
  },
  toolbarLink: {
    // padding: theme.spacing(1),
    flexShrink: 0,
  },
  coloring: {
    background: '#E40046',
  },
}));
function MobileFooter() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.coloring}>
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          <StyledLink to="/mail" innerText="support@yoyogift.com" />
          <StyledLink to="/aboutus" innerText="About Us" />
          <StyledLink to="/contactus" innerText="Contact Us" />
        </Toolbar>
      </div>
    </div>
  );
}
export default MobileFooter;
