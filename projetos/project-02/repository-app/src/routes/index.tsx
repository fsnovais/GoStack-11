import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Dashboard from '../Pages/Dashboard'
import Repository from '../Pages/Repository'

const Routes: React.FC = () => (
  <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/repository" component={Repository}/>
  </Switch>
);

export default Routes;
