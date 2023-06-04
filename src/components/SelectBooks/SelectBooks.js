// import { useEffect, useState } from 'react';
import { addBook } from 'redux/selectedBooks/selectedBooksSlice';
import { useSelector, useDispatch } from 'react-redux';
import { booksSelectors } from 'redux/books';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'components/StyledButton/StyledButton ';
import { ErrorContainer } from 'components/ErrorContainer/ErrorContainer.styled';

import { StyledForm, Wrapper } from './SelectBooks.styled';

const initialValues = {
  book: '',
};
const validationSchema = Yup.object({
  book: Yup.string().required('Please select a book'),
});

export const SelectBooks = () => {
  const dispatch = useDispatch();
  const booksList = useSelector(booksSelectors.getBooksSelector);
  const books = booksList.filter(book => book.status === 'toRead');

  const defaultValue = 'Обрати книги з бібліотеки';

  const onSubmit = (val, { resetForm }) => {
    const newBook = books.find(book => book._id === val.book);
    console.log(newBook);
    resetForm();
    dispatch(addBook(newBook));
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <StyledForm>
        <Wrapper>
          <Field name="book" as="select">
            <option value="" hidden disabled>
              {defaultValue}
            </option>
            {books.map(book => (
              <option value={book._id} key={book._id}>
                {book.title}
              </option>
            ))}
          </Field>
          <ErrorContainer>
            <ErrorMessage name="book" />
          </ErrorContainer>
        </Wrapper>

        <Button size={170} textContent="Add" type="submit" />
      </StyledForm>
    </Formik>
  );
};
