import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from 'components/Layout/Layout';
const Library = lazy(() => import('pages/Library'));
const Training = lazy(() => import('pages/Training'));
const MobileLibBookTable = lazy(() => import('pages/MobileLibBookTable'));
const MobileTrainBookTable = lazy(() => import('pages/MobileTrainBookTable '));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));

export const App = () => {
  return (
    <>
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

          <Route
            path="/login"
            element={
              // <PublicRoute restricted>
              <LoginPage />
              // </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              // <PublicRoute restricted>
              <RegistrationPage />
              // </PublicRoute>
            }
          />
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
    </>
  );
};