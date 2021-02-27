import React from 'react';
import ReactDOM from 'react-dom';
import App from '@core/App';
import GlobalStyle from '@helpers/style/GlobalStyle';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals(console.info);
