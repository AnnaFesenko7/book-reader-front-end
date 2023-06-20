import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { registrationThunk } from 'redux/auth/authThunk';
import { useNavigate } from 'react-router-dom';

import { registrationSchema } from 'validSchemas/registrationSchema';
import { isRegisteredSelector } from 'redux/auth/authSelectors';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { RegistrationText } from 'components/RegistrationText/RegistrationText';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { AuthWrapper } from 'components/AuthWrapper/AuthWrapper.styled';
import { useTranslation } from 'react-i18next';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRegistered = useSelector(isRegisteredSelector);
  const { t } = useTranslation();

  useEffect(() => {
    console.log(isRegistered);
    if (isRegistered) {
      navigate('/login', { replace: true });
    }
  }, [isRegistered, navigate]);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handelSubmit = values => {
    console.log(values);
    dispatch(registrationThunk(values));
  };

  const fieldsArray = [
    {
      labelText: t('name'),
      placeholder: '...',
      name: 'name',
    },
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
    {
      labelText: t('confirmPassword'),
      placeholder: t('password'),
      name: 'confirmPassword',
    },
  ];

  return (
    <section>
      <StyledContainer>
        <AuthWrapper>
          <AuthForm
            fieldsArray={fieldsArray}
            btnTextContent={t('signUp')}
            initialValues={initialValues}
            validationSchema={registrationSchema}
            handelSubmit={handelSubmit}
          />
          <RegistrationText />
          {/* <div className={styles.right__block}>
            <div className={styles.log__text}>
              <svg className={styles.svg__qutation}>
                <use href={svgPath.quatation + '#quatation'}></use>
              </svg>
              <LoginPhrase />
            </div>
          </div> */}
        </AuthWrapper>
      </StyledContainer>
    </section>
  );
};

export default RegistrationPage;
