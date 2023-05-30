// import ChooseRating from './ChooseRating/ChooseRating';
// import { useTranslation } from 'react-i18next';
// import { useUpdateBookResumeMutation } from 'redux/books/booksApi';
import ReactStars from 'react-rating-stars-component';
import { Formik, Field, ErrorMessage } from 'formik';
import { schemaValidChooseRating } from 'validSchemas/schemaValidChooseRating';
import {
  StyledForm,
  StyledLabel,
  StyledTextarea,
  BtnWrapper,
} from './ResumeModalContent.styled';
import { ErrorContainer } from 'components/ErrorContainer/ErrorContainer.styled';
import { Button } from 'components/StyledButton/StyledButton ';

export const ResumeModalContent = ({ closeModal }) => {
  //   const [ratingValue, setRatingValue] = useState(rating);
  //   const { t } = useTranslation();
  //   const [updateBookResume] = useUpdateBookResumeMutation();

  const handleSubmit = val => {
    console.log(val);
  };

  return (
    <Formik
      initialValues={{ resume: '', rating: 0 }}
      onSubmit={handleSubmit}
      validationSchema={schemaValidChooseRating}
    >
      <StyledForm>
        <StyledLabel htmlFor="rating">
          {/* {t('chooseRating')} */}
          Обрати рейтинг книги
          <Field name="rating">
            {({ form, field }) => {
              const { setFieldValue } = form;
              const { value } = field;
              const ratingChange = val => setFieldValue(val);
              return (
                <ReactStars
                  id="rating"
                  {...field}
                  count={5}
                  onChange={ratingChange}
                  activeColor="#FF6B08"
                  size={17}
                  value={value}
                  color="#A6ABB9"
                  a11y={true}
                />
              );
            }}
          </Field>
          {/* <ChooseRating
              setRating={setRatingValue}
              rating={rating}
              name="rating"
            /> */}
        </StyledLabel>
        <StyledLabel htmlFor="resume">
          {/* {t('resumeRating')} */}
          Резюме
          <StyledTextarea
            as="textarea"
            placeholder="..."
            type="text"
            name="resume"
            maxLength={1000}
          />
          <ErrorContainer>
            <ErrorMessage name="resume" />
          </ErrorContainer>
        </StyledLabel>
        <BtnWrapper>
          <Button
            type="button"
            onClick={closeModal}
            textContent={'Назад'}
            size="115"
          />
          {/* {t('btnBack')} */}

          <Button type="submit" textContent={'Зберегти'} size="115" modal />
          {/* {t('btnSave')} */}
        </BtnWrapper>
      </StyledForm>
    </Formik>
  );
};
