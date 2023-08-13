import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { loginThunk } from 'redux/auth/authThunk';
import { googleLogIn } from 'redux/auth/authSlice';

import { useLoginRedirect } from 'hooks/useLoginRedirect';
import { loginSchema } from 'validSchemas/loginSchema';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { LoginSaw } from 'components/LoginSaw/LoginSaw';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { AuthWrapper } from 'components/AuthWrapper/AuthWrapper.styled';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();
  const query = queryString.parse(location.search);
  console.log('🚀 ~ file: LoginPage.js:21 ~ LoginPage ~ query:', query);

  useLoginRedirect();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (query.token) {
      dispatch(googleLogIn(query));
    }
  }, [dispatch, query]);

  const initialValues = {
    email: '',
    password: '',
  };

  const handleShow = () => {
    setShow(!show);
  };

  const fieldsArray = [
    {
      labelText: t('email'),
      placeholder: 'your@email.com',
      name: 'email',
      typeField: 'email',
    },
    {
      labelText: t('password'),
      placeholder: t('password'),
      name: 'password',
      typeField: `${show ? 'text' : 'password'}`,
    },
  ];

  const handelSubmit = values => {
    dispatch(loginThunk(values));
  };

  return (
    <section>
      <StyledContainer>
        <AuthWrapper>
          <AuthForm
            show={show}
            handleShow={handleShow}
            fieldsArray={fieldsArray}
            btnTextContent={t('login')}
            initialValues={initialValues}
            validationSchema={loginSchema}
            handelSubmit={handelSubmit}
            type="login"
          />
          <LoginSaw />
        </AuthWrapper>
      </StyledContainer>
    </section>
  );
};

export default LoginPage;
