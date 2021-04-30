import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { CookiesProvider } from 'react-cookie';

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
    <ReduxProvider store={store}>
      <CookiesProvider>
        <MuiThemeProvider theme={MaterialTheme}>
          <ContentWrapper container>
            <BrowserRouter>
              <Header />
              <Routes />
            </BrowserRouter>
            <Footer />
          </ContentWrapper>
        </MuiThemeProvider>
      </CookiesProvider>
    </ReduxProvider>
  );
}

export default App;
