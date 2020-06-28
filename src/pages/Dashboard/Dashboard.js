import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { getCategories } from '../../services/categoryServices';
import { getProducts } from '../../services/productService';
import { getUsers } from '../../services/UserService';
import Grid from '@material-ui/core/Grid';
import ExtensionIcon from '@material-ui/icons/Extension';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import PeopleIcon from '@material-ui/icons/People';
import { connect } from 'react-redux';
import Spinner from '../../atoms/Spinner';

const Dashboard = (props) => {
  const [product, setProduct] = useState({});
  const {
    categories: { data, status },
  } = props;
  const [user, setUsers] = useState({});
  useEffect(() => {
    props.dispatch(getCategories());
    getProducts().then((res) => setProduct(res.data));
    getUsers().then((res) => setUsers(res.data));
  }, []);

  return (
    <>
      {status === 'LOADING' ? (
        <Spinner />
      ) : (
        <div style={{ margin: '10% auto' }}>
          <div style={{ marginLeft: '25%' }}>
            <Grid style={{ margin: '0 0 0 0' }} container spacing={5}>
              <Grid item xs={3} xs-offset={5}>
                <Card>
                  <ListItem>
                    <ListItemIcon>
                      <CardGiftcardIcon style={{ color: 'Green' }} />
                    </ListItemIcon>
                    <ListItemText primary="Products" />
                    <CardContent>{product.length}</CardContent>
                  </ListItem>
                </Card>
              </Grid>
              <Grid item xs={3} xs-offset={5}>
                <Card>
                  <ListItem>
                    <ListItemIcon>
                      <ExtensionIcon style={{ color: 'Green' }} />
                    </ListItemIcon>
                    <ListItemText primary="Categories" />
                    <CardContent>{data.length}</CardContent>
                  </ListItem>
                </Card>
              </Grid>
              <Grid item xs={3} xs-offset={5}>
                <Card>
                  <ListItem>
                    <ListItemIcon>
                      <PeopleIcon style={{ color: 'Green' }} />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                    <CardContent>{user.length}</CardContent>
                  </ListItem>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </>
  );
};
function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}
Dashboard.propTypes = {
  dispatch: PropTypes.func,
  categories: PropTypes.array,
};

export default connect(mapStateToProps)(Dashboard);
