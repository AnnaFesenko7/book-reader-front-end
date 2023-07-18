import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import { theme } from 'constants/styleTheme';
import { PersistGate } from 'redux-persist/integration/react';
import './i18n';
import 'overlayscrollbars/overlayscrollbars.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/book-reader-front-end">
          <ThemeProvider theme={theme}>
            <Suspense fallback={<div>Loading...</div>}>
              <App />
            </Suspense>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
