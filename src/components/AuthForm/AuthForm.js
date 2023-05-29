import { Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { ErrorContainer } from 'components/ErrorContainer/ErrorContainer.styled';
import {
  FormContainer,
  StyledForm,
  StyledLabel,
  StyledField,
  LabelText,
  StyledButton,
  StyledLink,
} from './AuthForm.styled';

export const AuthForm = ({
  fieldsArray,
  btnTextContent,
  initialValues,
  validationSchema,
  handelSubmit,
  type,
}) => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
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
          {fieldsArray.map(({ labelText, placeholder, name }) => {
            return (
              <StyledLabel key={name} htmlFor={name}>
                <LabelText>{labelText}</LabelText>
                <StyledField
                  id={name}
                  name={name}
                  type="text"
                  placeholder={placeholder}
                />
                <ErrorContainer>
                  <ErrorMessage name={name} />
                </ErrorContainer>
              </StyledLabel>
            );
          })}
          <StyledButton type="submit">{btnTextContent}</StyledButton>

          {type === 'login' ? (
            <StyledLink>
              <Link to="/register">Реєстрація</Link>
            </StyledLink>
          ) : (
            <StyledLink>
              Вже з нами?
              <Link to="/login">Увійти</Link>
            </StyledLink>
          )}
        </StyledForm>
      </Formik>
    </FormContainer>
  );
};
