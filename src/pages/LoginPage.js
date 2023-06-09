import { useDispatch } from 'react-redux';

import { loginThunk } from 'redux/auth/authThunk';

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

  useLoginRedirect();

  const initialValues = {
    email: '',
    password: '',
  };

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
