import { Divider } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
// import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
// import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import stars from '../../images/stars.jpg';
import ListItems from '../../molecules/Dashboard/DashboardLists';
// import Deposits from './Deposits';
// import Orders from './Orders';
const drawerWidth = 240;
//
const useStyles = makeStyles((theme) => ({
  clickable: {
    cursor: 'pointer',
    '&:hover, &:focus': {
      color: 'red',
    },
    '&:active': {
      color: 'red',
    },
  },

  root: {
    display: 'flex',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listItemText: {
    fontSize: '0.9em',
    color: 'white', // Insert your required size
  },
  size: {
    fontSize: '18px',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: 'url(' + stars + ')',
  },
  paper: {
    flexDirection: 'column',
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  // const [out, setcOpen] = React.useState(false);
  const logOut = () => {
    localStorage.removeItem('storeResponseDetails');
    props.history.push('/');
  };
  // const handleClick = () => {
  //   setcOpen(!out);
  // };

  return (
    <div className={classes.root}>
      <AppBar position="absolute" style={{ backgroundColor: 'black  ' }}>
        <Toolbar
          style={{
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {' '}
          <List>
            <ListItem button onClick={logOut}>
              <ListItemText style={{ color: 'white' }} primary="Logout" />
              <ExitToAppIcon style={{ color: 'white' }} />{' '}
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
      >
        <List>
          {/* <ListItem>
            <ListItemIcon>
              <AccountCircleRoundedIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText style={{ color: 'white' }} primary="Admin" />
          </ListItem> */}
          {/* <ListItem button onClick={handleClick} style={{ color: 'white' }}>
           */}
          <List>
            <ListItemIcon style={{ color: 'white' }}>
              <AccountCircleRoundedIcon />
              <ListItemText primary="Admin" />
            </ListItemIcon>
          </List>
          {/*
            <ListItemText primary="Admin" />
            {out ? (
              <ExpandLess style={{ color: 'white' }} />
            ) : (
              <ExpandMore style={{ color: 'white' }} />
            )}
          </ListItem>
          <Collapse in={out} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                onClick={() => {
                  props.history.push('/admin/add-category');
                }}
                className={classes.nested}
              >
                <ListItemIcon style={{ color: 'white' }}>
                  <EditIcon className={classes.size} />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary="Edit Profile"
                />
              </ListItem>
            </List>
          </Collapse> */}
        </List>
        <Divider />
        <List>
          <ListItems classes={classes} />
        </List>
      </Drawer>
    </div>
  );
}
Dashboard.propTypes = {
  classes: PropTypes.object,
  root: PropTypes.object,
  history: PropTypes.object,
};
export default withRouter(Dashboard);
