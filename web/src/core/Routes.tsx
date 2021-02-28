import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@screens/Home';
import About from '@screens/About';
import Login from '@screens/Login';
import Register from '@screens/Register';

import Items from '@screens/Items';
import ItemsSingle from '@screens/ItemSingle';

import Categories from '@screens/Categories';
import CategoriesSingle from '@screens/CategorySingle';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/items" exact component={Items} />
      <Route path="/items/:id" component={ItemsSingle} />

      <Route path="/itemCategories" exact component={Categories} />
      <Route path="/itemCategories/:id" component={CategoriesSingle} />
    </Switch>
  );
}
