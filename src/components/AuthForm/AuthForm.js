import { Formik, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { AuthThroughGoogle } from 'components/AuthThroughGoogle/AuthThroughGoogle';
import { ErrorContainer } from 'components/ErrorContainer/ErrorContainer.styled';

import {
  FormContainer,
  StyledForm,
  StyledLabel,
  StyledField,
  LabelText,
  StyledButton,
  StyledLink,
  HideAndShowPasswordIcon,
} from './AuthForm.styled';

export const AuthForm = ({
  fieldsArray,
  btnTextContent,
  initialValues,
  validationSchema,
  handelSubmit,
  type,
  show,
  handleShow,
  showConfirm,
  handleShowConfirm,
}) => {
  const { t } = useTranslation();
  const onSubmit = (values, { resetForm }) => {
    handelSubmit(values);
    resetForm();
  };

  return (
    <FormContainer>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        type={type}
      >
        <StyledForm autoComplete="off">
          <AuthThroughGoogle />
          {fieldsArray.map(({ labelText, placeholder, name, typeField }) => {
            return (
              <StyledLabel
                key={name}
                htmlFor={name}
                style={{ position: 'relative' }}
              >
                <LabelText>{labelText}</LabelText>
                <StyledField
                  id={name}
                  name={name}
                  type={typeField}
                  placeholder={placeholder}
                />
                {name === 'password' && (
                  <HideAndShowPasswordIcon onClick={handleShow}>
                    {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </HideAndShowPasswordIcon>
                )}
                {name === 'confirmPassword' && (
                  <HideAndShowPasswordIcon onClick={handleShowConfirm}>
                    {showConfirm ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </HideAndShowPasswordIcon>
                )}
                <ErrorContainer>
                  <ErrorMessage name={name} />
                </ErrorContainer>
              </StyledLabel>
            );
          })}
          <StyledButton type="submit">{btnTextContent}</StyledButton>

          {type === 'login' ? (
            <StyledLink>
              <Link to="/register">{t('signUp')}</Link>
            </StyledLink>
          ) : (
            <StyledLink>
              {t('alreadyHaveAnAccount')}
              <Link to="/login">{t('login')}</Link>
            </StyledLink>
          )}
        </StyledForm>
      </Formik>
    </FormContainer>
  );
};
