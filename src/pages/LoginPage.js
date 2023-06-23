import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loginThunk } from 'redux/auth/authThunk';
import { tokenSelector } from 'redux/auth/authSelectors';
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

  const token = useSelector(tokenSelector);
  useLoginRedirect();

  const initialValues = {
    email: '',
    password: '',
  };

  useEffect(() => {
    console.log(token);
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]);

  const fieldsArray = [
    {
      labelText: t('email'),
      placeholder: 'your@email.com',
      name: 'email',
    },
    {
      labelText: t('password'),
      placeholder: t('password'),
      name: 'password',
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
