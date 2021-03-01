import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@screens/Home';
import About from '@screens/About';
import Login from '@screens/Login';
import Register from '@screens/Register';

import Items from '@screens/Items';
import ItemsSingle from '@screens/ItemSingle';
import ItemNew from '@screens/ItemNew';

import Categories from '@screens/Categories';
import CategoriesSingle from '@screens/CategorySingle';
import CategoryNew from '@screens/CategoryNew';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/items" exact component={Items} />
      <Route path="/item/new" exact component={ItemNew} />
      <Route path="/item/:id" component={ItemsSingle} />

      <Route path="/categories" exact component={Categories} />
      <Route path="/category/new" exact component={CategoryNew} />
      <Route path="/category/:id" component={CategoriesSingle} />
    </Switch>
  );
}
