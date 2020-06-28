import React, { useEffect } from 'react';
import { getCategories } from '../services/categoryServices';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import SelectSort from '../atoms/SelectSort';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import kebab, { firstCapital } from '../services/kebab';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-around',
    height: 50,
    marginBottom: '2',
    background: 'whitesmoke',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    buttom: '0',
  },
  coloring: {
    height: '100px',
  },
}));
const Navigationbar = (props) => {
  const classes = useStyles();
  useEffect(() => {
    props.getCategories();
  }, []);

  return (
    <div className={classes.coloring}>
      {' '}
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <SelectSort />
        {props.categories.data.map((category, index) => {
          return (
            <div key={index}>
              <NavLink
                exact
                // style={{ color: 'white' }}
                activeClassName="is-active"
                activeStyle={{ color: 'red' }}
                color="primary"
                noWrap
                variant="body2"
                className={classes.toolbarLink}
                to={`/categories/${kebab(category.title)}/${category._id}`}
                label="active"
              >
                {firstCapital(category.title)}
              </NavLink>
            </div>
          );
        })}
      </Toolbar>
    </div>
  );
};
Navigationbar.propTypes = {
  categories: PropTypes.array,
  dispatch: PropTypes.func,
  getCategories: PropTypes.func,
};
function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

export default connect(mapStateToProps, {
  getCategories,
})(Navigationbar);
