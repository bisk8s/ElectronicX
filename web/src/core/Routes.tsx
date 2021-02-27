import React from 'react';

import Home from '@screens/Home';
import About from '@screens/About';
import { Route, Switch } from 'react-router-dom';
import Login from '@screens/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
    </Switch>
  );
}
