import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import {
  Navbar,
  NavButton,
  LogoPlace,
  Headline,
  Separator,
  RightPanel,
} from '@components/styled/Navbar';
import { Footer, ContentWrapper } from '@components/styled/Footer';

import logoImage from '@public/logoWhiteBadge.svg';

import Home from '@screens/Home';
import About from '@screens/About';

import store from '@redux/store';

function App() {
  return (
    <Provider store={store}>
      <ContentWrapper>
        <BrowserRouter>
          <header>
            <Navbar>
              <LogoPlace src={logoImage} className="App-logo" alt="logo" height={60} width={60} />
              <Headline>ElectronicX</Headline>
              <NavButton to="/">Home</NavButton>
              <NavButton to="/about">About</NavButton>
              <RightPanel>
                <Separator />
                <NavButton to="/login">Login</NavButton>
              </RightPanel>
            </Navbar>
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </ContentWrapper>
      <Footer />
    </Provider>
  );
}

export default App;
