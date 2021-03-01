import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Footer, ContentWrapper } from '@components/styled/Footer';

import store from '@redux/store';
import configureApi from 'src/services/api';
import MaterialTheme from '@helpers/style/MaterialTheme';
import Routes from './Routes';
import Header from './Header';

configureApi();

function App() {
  return (
    <Provider store={store}>
      <ContentWrapper>
        <BrowserRouter>
          <ThemeProvider theme={MaterialTheme}>
            <Header />
            <Routes />
          </ThemeProvider>
        </BrowserRouter>
      </ContentWrapper>
      <Footer />
    </Provider>
  );
}

export default App;
