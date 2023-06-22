import { useTranslation } from 'react-i18next';
import { addBook } from 'redux/selectedDates/selectedDatesSlice';
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
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const booksList = useSelector(booksSelectors.getBooks);
  // const selectedBooks = useSelector(state => state.selectedDates.list);
  const books = booksList.filter(book => book.status === 'toRead');

  const defaultValue = t('chooseBooks');

  const onSubmit = (val, { resetForm }) => {
    // const isBookAlreadySelected = selectedBooks.some(({ _id }) => _id === book);
    // if (isBookAlreadySelected) {
    //   throw Error('This book already selected');
    // }
    const newBook = books.find(book => book._id === val.book);

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
            {/* {isBookAlreadySelected && <p>This book already selected</p>} */}
            <ErrorMessage name="book" />
          </ErrorContainer>
        </Wrapper>

        <Button size={170} textContent={t('btnAdd')} type="submit" />
      </StyledForm>
    </Formik>
  );
};
