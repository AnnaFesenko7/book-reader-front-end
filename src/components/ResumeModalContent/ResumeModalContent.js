import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { useUpdateBookResumeMutation } from 'redux/books/booksApi';
import ReactStars from 'react-rating-stars-component';
import { Formik, Field, ErrorMessage } from 'formik';
import { schemaValidChooseRating } from 'validSchemas/schemaValidChooseRating';
import {
  StyledForm,
  StyledLabel,
  // StyledTextarea,
  BtnWrapper,
} from './ResumeModalContent.styled';
import { ErrorContainer } from 'components/ErrorContainer/ErrorContainer.styled';
import { Button } from 'components/StyledButton/StyledButton ';

export const ResumeModalContent = ({ closeModal }) => {
  const [rating, setRating] = useState(0);
  //   const [ratingValue, setRatingValue] = useState(rating);
  const { t } = useTranslation();
  //   const [updateBookResume] = useUpdateBookResumeMutation();

  const handleSubmit = val => {
    console.log(val);
    console.log(rating);
  };

  return (
    <Formik
      initialValues={{ resume: '', rating: rating }}
      onSubmit={handleSubmit}
      validationSchema={schemaValidChooseRating}
    >
      <StyledForm>
        <StyledLabel htmlFor="rating">
          {t('chooseRating')}
          <Field name="rating">
            {({ form, field }) => {
              // const { setFieldValue } = form;
              // const { value } = field;
              // const ratingChange = val => setFieldValue(val);
              return (
                <ReactStars
                  id="rating"
                  {...field}
                  count={5}
                  onChange={newValue => {
                    setRating(newValue);
                  }}
                  activeColor="#FF6B08"
                  size={17}
                  value={rating}
                  color="#A6ABB9"
                  // a11y={true}
                />
              );
            }}
          </Field>
        </StyledLabel>

        <StyledLabel htmlFor="resume">
          {t('resumeRating')}
          <Field
            as="textarea"
            placeholder="..."
            name="resume"
            style={{
              height: '170px',
              resize: 'none',
              border: '1px solid #a6abb9',
            }}
          />
          <ErrorContainer>
            <ErrorMessage name="resume" />
          </ErrorContainer>
        </StyledLabel>

        <BtnWrapper>
          <Button
            type="button"
            onClick={closeModal}
            textContent={t('btnBack')}
            size="115"
          />

          <Button type="submit" textContent={t('btnSave')} size="115" active />
        </BtnWrapper>
      </StyledForm>
    </Formik>
  );
};
