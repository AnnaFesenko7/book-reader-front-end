import { StyledForm } from './SelectBooks.styled';
import * as Yup from 'yup';
import { Button } from 'components/StyledButton/StyledButton ';
import { ErrorContainer } from 'components/ErrorContainer/ErrorContainer.styled';
import { Formik, Field, ErrorMessage } from 'formik';
export const books = [
  {
    status: 'toRead',
    _id: 1,
    author: 'Гюго',
    pages: 300,
    title: 'Людина що сміється',
    year: 1980,
    rating: 2,
    resume: '',
  },
  {
    status: 'toRead',
    _id: 2,
    author: 'J.K.Roling',
    pages: 400,
    title: 'Harry Potter',
    year: 2014,
    rating: 2,
    resume: '',
  },
  {
    status: 'toRead',
    _id: 3,
    author: 'Жуль Верн',
    pages: 250,
    title: '15-тирічний капітан',
    year: 2008,
    rating: 4,
    resume: '',
  },
  {
    status: 'toRead',
    _id: 4,
    author: 'Жуль Верн',
    pages: 250,
    title: '15-ти    річний капітан',
    year: 2008,
    rating: 4,
    resume: '',
  },
  {
    status: 'toRead',
    _id: 5,
    author: 'Жуль Верн',
    pages: 250,
    title: '15-ти    річний капітан ',
    year: 2008,
    rating: 5,
    resume: '',
  },
];

const initialValues = {
  book: '',
};
const validationSchema = Yup.object({
  book: Yup.string().required('Please select a book'),
});

export const SelectBooks = ({ onAddBtnClick }) => {
  const defaultValue = 'Обрати книги з бібліотеки';
  const onSubmit = (val, { resetForm }) => {
    console.log(val);
    resetForm();
    onAddBtnClick(val);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <StyledForm>
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

        <Button size={170} textContent="Add" type="submit" />
      </StyledForm>
    </Formik>
  );
};
