import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import { theme } from 'constants/styleTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/book-reader-front-end">
      {/* <Provider store={store}> */}
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Suspense>
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
