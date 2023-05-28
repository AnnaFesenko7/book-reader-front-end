import { Formik, ErrorMessage } from 'formik';
import { ErrorContainer } from 'components/ErrorContainer/ErrorContainer.styled';
import {
  FormContainer,
  StyledForm,
  StyledLabel,
  StyledField,
  LabelText,
  StyledButton,
} from './AuthForm.styled';

export const AuthForm = ({
  fieldsArray,
  btnTextContent,
  initialValues,
  validationSchema,
  handelSubmit,
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
        </StyledForm>
      </Formik>
    </FormContainer>
  );
};
