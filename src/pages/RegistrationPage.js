import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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

  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
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

  const handleShow = () => {
    setShow(!show);
  };
  const handleShowConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  const fieldsArray = [
    {
      labelText: t('name'),
      placeholder: '...',
      name: 'name',
      typeField: 'text',
    },
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
    {
      labelText: t('confirmPassword'),
      placeholder: t('password'),
      name: 'confirmPassword',
      typeField: `${showConfirm ? 'text' : 'password'}`,
    },
  ];

  return (
    <section>
      <StyledContainer>
        <AuthWrapper>
          <AuthForm
            show={show}
            showConfirm={showConfirm}
            handleShow={handleShow}
            handleShowConfirm={handleShowConfirm}
            fieldsArray={fieldsArray}
            btnTextContent={t('signUp')}
            initialValues={initialValues}
            validationSchema={registrationSchema}
            handelSubmit={handelSubmit}
          />
          <RegistrationText />
        </AuthWrapper>
      </StyledContainer>
    </section>
  );
};

export default RegistrationPage;
