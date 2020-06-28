import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withRouter, NavLink } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CategoryIcon from '@material-ui/icons/Category';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import React from 'react';

const ListItems = (props) => {
  const { classes } = props;
  const [open, setpOpen] = React.useState(false);
  const [out, setcOpen] = React.useState(false);

  const handleProduct = () => {
    setpOpen(!open);
  };
  const handleClick = () => {
    setcOpen(!out);
  };

  return (
    <div>
      <NavLink
        exact
        style={{ color: 'white' }}
        activeClassName="is-active"
        activeStyle={{ color: 'red' }}
        to="/admin/dashboard"
      >
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon
              className={classes.customHoverFocus}
              style={{ color: 'white' }}
            />
          </ListItemIcon>
          Dashboard
          {/* <ListItemText style={{ color: 'white' }} primary="Dashboard" /> */}
        </ListItem>
      </NavLink>

      <ListItem button onClick={handleProduct}>
        <ListItemIcon style={{ color: 'white' }}>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText style={{ color: 'white' }} primary="Products" />
        {open ? (
          <ExpandLess style={{ color: 'white' }} />
        ) : (
          <ExpandMore style={{ color: 'white' }} />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavLink
            data-testid="dashboard"
            exact
            style={{ color: 'white' }}
            activeClassName="is-active"
            activeStyle={{ color: 'red' }}
            to="/admin/addproduct"
          >
            <ListItem button className={clsx(classes.nested)}>
              <ListItemIcon style={{ color: 'white' }}>
                <AddShoppingCartIcon className={classes.size} />
              </ListItemIcon>
              Add Products
            </ListItem>
          </NavLink>
          <NavLink
            exact
            style={{ color: 'white' }}
            activeClassName="is-active"
            activeStyle={{ color: 'red' }}
            to="/admin/listproducts"
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon style={{ color: 'white' }}>
                <ListAltIcon className={classes.size} />
              </ListItemIcon>
              List of Products
            </ListItem>
          </NavLink>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick} style={{ color: 'white' }}>
        <ListItemIcon style={{ color: 'white' }}>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
        {out ? (
          <ExpandLess style={{ color: 'white' }} />
        ) : (
          <ExpandMore style={{ color: 'white' }} />
        )}
      </ListItem>
      <Collapse in={out} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavLink
            exact
            style={{ color: 'white' }}
            activeClassName="is-active"
            activeStyle={{ color: 'red' }}
            to="/admin/add-category"
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon style={{ color: 'white' }}>
                <CategoryIcon className={classes.size} />
              </ListItemIcon>
              Add Categories
            </ListItem>
          </NavLink>
          <NavLink
            exact
            style={{ color: 'white' }}
            activeClassName="is-active"
            activeStyle={{ color: 'red' }}
            to="/admin/listcategories"
          >
            <ListItem
              button
              className={classes.nested}
              // style={{ color: 'white' }}
            >
              <ListItemIcon style={{ color: 'white' }}>
                <ListAltIcon className={classes.size} />
              </ListItemIcon>
              List of Categories
            </ListItem>
          </NavLink>
        </List>
      </Collapse>
      <NavLink
        exact
        style={{ color: 'white' }}
        activeClassName="is-active"
        activeStyle={{ color: 'red' }}
        to="/admin/list-users"
      >
        <ListItem
          button
          onClick={() => {
            props.history.push('/admin/list-users');
          }}
        >
          <ListItemIcon style={{ color: 'white' }}>
            <PeopleIcon />
          </ListItemIcon>
          Users
        </ListItem>
      </NavLink>
    </div>
  );
};
ListItems.propTypes = {
  history: PropTypes.object,
  classes: PropTypes.object,
};

export default withRouter(ListItems);
