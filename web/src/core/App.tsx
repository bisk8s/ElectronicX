import React from 'react';
import { Provider } from 'react-redux';

import { Footer, ContentWrapper } from '@components/styled/Footer';

import store from '@redux/store';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './Header';

function App() {
  return (
    <Provider store={store}>
      <ContentWrapper>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </ContentWrapper>
      <Footer />
    </Provider>
  );
}

export default App;
