import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { tokenSelector } from 'redux/auth/authSelectors';

// import { getProfileThunk } from 'redux/auth/userThunk';
import { userSelectors, userThunk } from 'redux/auth';

export const useLoginRedirect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(userSelectors.tokenSelector);
  useEffect(() => {
    if (token) {
      dispatch(userThunk.getProfileThunk());
      navigate('/', { replace: true });
    }
  }, [dispatch, token, navigate]);
};
