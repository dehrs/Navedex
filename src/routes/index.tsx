import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Adicionar from '../pages/Adicionar';
import Editar from '../pages/Editar';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" component={Home} routePrivate />
    <Route path="/adicionar" component={Adicionar} routePrivate />
    <Route path="/editar/:idNave" component={Editar} routePrivate />
  </Switch>
);

export default Routes;
