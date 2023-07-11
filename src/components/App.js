import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { userThunk } from 'redux/auth';

import { Layout } from 'components/Layout/Layout';

const Library = lazy(() => import('pages/Library'));
const Training = lazy(() => import('pages/Training'));
const MobileLibBookTable = lazy(() => import('pages/MobileLibBookTable'));
const MobileTrainBookTable = lazy(() => import('pages/MobileTrainBookTable '));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userThunk.getProfileThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Library />} />
          <Route path="mobileLibBookTable" element={<MobileLibBookTable />} />

          <Route path="training" element={<Training />} />

          <Route
            path="mobileTrainingBookTable"
            element={<MobileTrainBookTable />}
          />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegistrationPage />} />
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
