import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@screens/Home';
import About from '@screens/About';
import Login from '@screens/Login';
import Register from '@screens/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
