import React from 'react';
import ReactDOM from 'react-dom';
import App from '@core/App';
import GlobalStyle from '@helpers/style/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
