import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homeroutes from './index';
import AdminRoutes from './adminroutes';
import Protected from './ProtectedRoutes/adminProtection';

const routes = () => {
  return (
    <Switch>
      <Protected path="/admin" component={AdminRoutes} exact={false} />
      <Route path="/" component={Homeroutes} exact={false} />
    </Switch>
  );
};

export default routes;
