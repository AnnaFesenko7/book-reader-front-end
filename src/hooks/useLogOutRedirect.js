import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { tokenSelector } from 'redux/auth/authSelectors';

export const useLogOutRedirect = () => {
  const navigate = useNavigate();
  const token = useSelector(tokenSelector);

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
    }
  }, [token, navigate]);
};
