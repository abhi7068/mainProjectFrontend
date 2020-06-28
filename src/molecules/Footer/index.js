import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import StyledLink from '../../atoms/StyledLink';
import { useMediaQuery } from '@material-ui/core';
import MobileFooter from '../../atoms/MobileFooter';
const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-around',
    position: 'fixed',
    bottom: '0',
    background: '#E40046 ',
    height: '70',
    width: '100%',
    overflowX: 'auto',
  },
  toolbarLink: {
    // padding: theme.spacing(1),
    flexShrink: 0,
  },
  coloring: {
    background: '#E40046',
  },
}));
function Footer() {
  const mobileView = useMediaQuery('(max-width:460px)');
  const bigscreen = useMediaQuery('(min-width:460px)');
  const classes = useStyles();
  return (
    <div>
      {bigscreen && (
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
      )}
      {mobileView && <MobileFooter />}
    </div>
  );
}
export default Footer;
