import React from 'react';
import { Formik } from 'formik';
// import * as yup from 'yup';
import { FaArrowLeft } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
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
  // FormContainer,
} from './BookAddForm.styled';

export const BookAddForm = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  // const [addBook, { isLoading, error }] = useAddBookMutation();
  // const { t, i18n } = useTranslation();
  // const { data } = useGetAllBooksQuery();

  // const schema = yup.object().shape({});
  // validationSchema: Yup.object().shape({
  //   title: Yup.string()
  //     .min(1, t('book_err_title1'))
  //     .max(50, t('book_err_title2'))
  //     .matches(/^[^\s-]/, t('book_err_title3'))
  //     .required(t('book_err_title4')),
  //   author: Yup.string()
  //     .min(1, t('book_err_author1'))
  //     .max(50, t('book_err_author2'))
  //     .matches(/^[^\s-]/, t('book_err_author3'))
  //     .matches(/^\D+$/, t('book_err_author4'))
  //     .required(t('book_err_author5')),
  //   year: Yup.number()
  //     .typeError(t('book_err_year1'))
  //     .min(1000, t('book_err_year2'))
  //     .max(2022, t('book_err_year3')),
  //   pages: Yup.number()
  //     .typeError(t('book_err_pages1'))
  //     .min(1, t('book_err_pages2'))
  //     .max(9999, t('book_err_pages3'))
  //     .required(t('book_err_pages4')),
  // }),
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

  return (
    // <FormContainer>
    <Formik>
      <StyledForm>
        <WrapperGroupOfInputs>
          {isMobileDevice && <FaArrowLeft />}
          <StyledLabel>
            Book title *
            <StyledField
              id="title"
              name="title"
              type="text"
              placeholder="..."
              // onChange={formik.handleChange}
              // value={formik.values.title}
              // className={s.inputTitle}
            />
          </StyledLabel>
          <StyledLabel>
            Author *
            <StyledField
              id="author"
              name="author"
              type="text"
              placeholder="..."
              // onChange={formik.handleChange}
              // value={formik.values.author}
              // className={s.inputAuthor}
            />
          </StyledLabel>
          <StyledLabel>
            Publication date
            <StyledField
              id="year"
              name="year"
              type="text"
              placeholder="..."
              // onChange={formik.handleChange}
              // value={formik.values.year}
              // className={s.inputDate}
            />
          </StyledLabel>
          <StyledLabel>
            Amount of pages *
            <StyledField
              id="pages"
              name="pages"
              type="text"
              placeholder="..."
              // className={s.inputPages}
            />
          </StyledLabel>
        </WrapperGroupOfInputs>
        <Button
          type="submit"
          textContent="Add"
          size="170"
          height="40"
          // onClick={() => window.location.reload(false)}
        />
      </StyledForm>
      {/* {isLoading && <p>Is Adding</p>} */}
    </Formik>
    // </FormContainer>
  );
};
