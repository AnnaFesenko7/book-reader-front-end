import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { tokenSelector } from 'redux/auth/authSelectors';

import { getProfileThunk } from 'redux/auth/userThunk';

export const useRedirectToHomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(tokenSelector);
  useEffect(() => {
    if (token) {
      dispatch(getProfileThunk());
      navigate('/', { replace: true });
    }
  }, [dispatch, token, navigate]);
};
