import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { librarySchema } from 'validSchrmas/librarySchema';
// import { useAddBookMutation, useGetAllBooksQuery } from 'redux/books/booksApi';
// import { useTranslation } from 'react-i18next';
// import { SpinnerCircular } from 'spinners-react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Button } from 'components/StyledButton/StyledButton ';
import {
  StyledForm,
  StyledLabel,
  StyledField,
  WrapperGroupOfInputs,
  ErrorContainer,
  ButtonContainer,
} from './BookAddForm.styled';

export const BookAddForm = () => {
  // const [addBook, { isLoading, error }] = useAddBookMutation();
  // const { t, i18n } = useTranslation();
  // const { data } = useGetAllBooksQuery();

  //   onSubmit: async ({ title, author, year, pages }, { resetForm }) => {
  //     if (year === '') {
  //       await addBook({
  //         title,
  //         author,
  //         pages,
  //       })
  //         .then(() => {
  //           Notify.success(t('book__add__message1'));
  //         })
  //         .catch(error => {
  //           Notify.error(t('book__add__message2'));
  //         });
  //     } else {
  //       await addBook({
  //         title,
  //         author,
  //         year,
  //         pages,
  //       })
  //         .then(() => {
  //           Notify.success(t('book__add__message1'));
  //         })
  //         .catch(error => {
  //           Notify.error(t('book__add__message2'));
  //         });
  //     }
  //     resetForm();
  //     handleClickClose();
  //   },
  // });
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  const initialValues = {
    title: '',
    author: '',
    year: '',
    pages: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={librarySchema}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <WrapperGroupOfInputs>
          <StyledLabel htmlFor="title">
            Book title *
            <StyledField
              id="title"
              name="title"
              type="text"
              placeholder="..."
            />
            <ErrorContainer>
              <ErrorMessage name="title" />
            </ErrorContainer>
          </StyledLabel>

          <StyledLabel htmlFor="author">
            Author *
            <StyledField
              id="author"
              name="author"
              type="text"
              placeholder="..."
            />
            <ErrorContainer>
              <ErrorMessage name="author" />
            </ErrorContainer>
          </StyledLabel>

          <StyledLabel htmlFor="year">
            Publication date
            <StyledField id="year" name="year" type="text" placeholder="..." />
            <ErrorContainer>
              <ErrorMessage name="year" />
            </ErrorContainer>
          </StyledLabel>

          <StyledLabel htmlFor="pages">
            Amount of pages *
            <StyledField
              id="pages"
              name="pages"
              type="text"
              placeholder="..."
            />
            <ErrorContainer>
              <ErrorMessage name="pages" />
            </ErrorContainer>
          </StyledLabel>
        </WrapperGroupOfInputs>
        <ButtonContainer>
          <Button type="submit" textContent="Add" size="175" height="40" />
          <ErrorContainer />
        </ButtonContainer>
      </StyledForm>
      {/* {isLoading && <p>Is Adding</p>} */}
    </Formik>
  );
};
