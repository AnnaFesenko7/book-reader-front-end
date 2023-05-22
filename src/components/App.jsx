import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from 'components/Layout/Layout';
// const Library = lazy(() => import('../pages/Library'));
import { Library } from 'pages/Library';
import { Training } from 'pages/Training';
import { MobileLibBookTable } from 'pages/MobileLibBookTable';
import { MobileTrainBookTable } from 'pages/MobileTrainBookTable ';

export const App = () => {
  return (
    <>
      {/* <Suspense> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              // <PrivateRoute>
              <Library />
              // </PrivateRoute>
            }
          />
          <Route path="mobileLibBookTable" element={<MobileLibBookTable />} />

          <Route
            path="training"
            element={
              // <PrivateRoute>
              <Training />
              //  </PrivateRoute>
            }
          />

          <Route
            path="mobileTraingBookTable"
            element={<MobileTrainBookTable />}
          />

          {/* <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            /> */}

          {/* <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegistrationPage />
                </PublicRoute>
              }
            /> */}
          {/* 
            <Route
              path="/changePassword"
              element={
                <PublicRoute restricted>
                  <ChangePasswordPage />
                </PublicRoute>
              }
            /> */}
        </Route>
        <Route path="*" element={<p>There is nothing here: 404!</p>} />
      </Routes>
      <GlobalStyle />
      {/* </Suspense> */}
    </>
  );
};
