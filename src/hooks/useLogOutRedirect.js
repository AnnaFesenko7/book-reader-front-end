import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/auth/authSelectors';

export const useLogOutRedirect = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isLoggedInSelector);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);
};
