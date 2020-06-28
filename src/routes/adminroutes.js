import React from 'react';
import AddCategoryPage from '../pages/Categories/AddCategoryPage';
import Dashboard from '../pages/Dashboard/';
import ListProductsPage from '../pages/Products/ListProductsPage';
import ListCategoriesPage from '../pages/Categories/ListCategoriesPage';
import UpdateProductPage from '../pages/Products/UpdateProductPage';
import { Route, Switch } from 'react-router-dom';
import AddProductPage from '../pages/Products/AddProductPage';
import UpdateCategoryPage from '../pages/Categories/UpdateCategoryPage';
import ListUsersPage from '../pages/User/ListUsersPage';
import DashboardPage from '../pages/Dashboard/Dashboard';

const adminroutes = () => {
  return (
    <>
      <Dashboard />
      <Switch>
        {/* <Route exact component={PageNotFound} /> */}
        <Route path="/admin/dashboard" component={DashboardPage} exact={true} />
        <Route
          path="/admin/listproducts"
          component={ListProductsPage}
          exact={true}
        />
        <Route
          path="/admin/addproduct"
          component={AddProductPage}
          exact={true}
        />
        <Route
          path="/admin/updateproduct/:id"
          component={UpdateProductPage}
          exact={true}
        />
        <Route
          path="/admin/listcategories"
          component={ListCategoriesPage}
          exact={true}
        />
        <Route
          path="/admin/add-category"
          component={AddCategoryPage}
          exact={true}
        />
        <Route
          path="/admin/update-category/:id"
          component={UpdateCategoryPage}
          exact={true}
        />
        <Route
          path="/admin/list-users"
          component={ListUsersPage}
          exact={true}
        />

        {/* <Route path="/dash/dashboard" component={Dashboard} exact={true} /> */}
      </Switch>
    </>
  );
};

export default adminroutes;
