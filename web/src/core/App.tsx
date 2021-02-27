import React from 'react';
import Headline from '@components/styled/Headline';
import Navbar from '@components/styled/Wrapper';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';

import Home from '@screens/Home';
import About from '@screens/About';

import logo from '@public/logoWhiteBadge.svg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Navbar>
            <img src={logo} className="App-logo" alt="logo" height={60} width={60} />
            <Headline>ElectronicX</Headline>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Navbar>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
