import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Router
import { BrowserRouter } from 'react-router-dom';

// Meta mask connection
import { DAppProvider } from '@usedapp/core';
import { usedappConfig } from './utils/usedapp.config';

// Redux toolkit
import { Provider } from 'react-redux';
import store from './app-redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <DAppProvider config={usedappConfig}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </DAppProvider>
  </React.StrictMode>
);
