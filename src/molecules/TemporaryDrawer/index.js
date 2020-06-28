import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { getCategories } from '../../services/categoryServices';
import { sortByPrice } from '../../store/actions/productAction';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import kebab, { firstCapital } from '../../services/kebab';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerCompoent from '../DrawerCompoent';
import './style.css';
const drawerWidth = 300;

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
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
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
    // backgroundImage: 'url(' + stars + ')',
  },
  paper: {
    flexDirection: 'column',
  },
}));
const TemporaryDrawer = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  useEffect(() => {
    props.getCategories();
  }, []);
  const handleSort = () => {
    props.sortByPrice();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // Sorting
  const list = (anchor) => (
    <div>
      <ListItem style={{ color: '#969397' }}>
        <ListItemIcon style={{ color: 'Black' }}></ListItemIcon>
        <ListItemText style={{ color: '#969397' }} primary="Categories" />
      </ListItem>
      <List component="div">
        {props.categories.data.map((category, index) => {
          return (
            <div key={index}>
              <ListItem className={clsx(classes.nested)}>
                <ListItemText style={{ marginLeft: '  36px' }}>
                  <div>
                    {' '}
                    <NavLink
                      color="primary"
                      noWrap
                      activeClassName="is-active"
                      activeStyle={{ color: 'red' }}
                      variant="body2"
                      className={classes.toolbarLink}
                      to={`/categories/${kebab(category.title)}/${
                        category._id
                      }`}
                      label="active"
                    >
                      {firstCapital(category.title)}
                    </NavLink>
                  </div>
                </ListItemText>
              </ListItem>
            </div>
          );
        })}
      </List>
      <ListItem>
        <ListItemIcon style={{ color: 'Black' }}></ListItemIcon>
        <ListItemText style={{ color: '#969397' }} primary="Sorting" />
      </ListItem>
      <List component="div">
        <ListItem button onClick={handleSort}>
          <ListItemIcon style={{ color: 'black' }}></ListItemIcon>
          <ListItemText style={{ color: 'black' }} primary="Sort By Price" />
        </ListItem>
      </List>
      <ListItem>
        <ListItemIcon style={{ color: 'Black' }}></ListItemIcon>
        <ListItemText style={{ color: '#969397' }} primary="Fliters" />
      </ListItem>
      <DrawerCompoent />
    </div>
  );
  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button data-testid="test-input" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: 'white  ' }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            classes={{
              paper: clsx(classes.drawerPaper),
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state,
    categories: state.categories,
  };
};
TemporaryDrawer.propTypes = {
  getCategories: PropTypes.func,
  sortByPrice: PropTypes.func,
  categories: PropTypes.array,
  getResetSorting: PropTypes.func,
};

export default connect(mapStateToProps, {
  getCategories,
  sortByPrice,
})(TemporaryDrawer);
