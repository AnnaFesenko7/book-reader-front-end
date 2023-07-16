import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import { Formik, Field } from 'formik';

import { booksThunk } from 'redux/books';
import { schemaValidChooseRating } from 'validSchemas/schemaValidChooseRating';
import { Button } from 'components/StyledButton/StyledButton ';
import { ErrorContainer } from 'components/ErrorContainer/ErrorContainer.styled';
import {
  StyledForm,
  StyledLabel,
  BtnWrapper,
  StyledTextarea,
} from './ResumeModalContent.styled';

export const ResumeModalContent = ({
  closeModal,
  id,
  initialValues,
  resetState,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  const handleSubmit = val => {
    dispatch(booksThunk.feedbackThunk({ feedback: val, id: id }));
    closeModal();
    resetState();
  };
  const sizeDetermination = () => {
    return isMobileDevice ? 97 : 130;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schemaValidChooseRating}
    >
      <StyledForm>
        <StyledLabel htmlFor="rating">{t('chooseRating')} </StyledLabel>
        <Field name="rating">
          {({ form, field, meta }) => {
            const { setFieldValue } = form;

            return (
              <ReactStars
                id="rating"
                type="number"
                {...field}
                count={5}
                activeColor="#FF6B08"
                size={17}
                color="#A6ABB9"
                onChange={val => {
                  setFieldValue('rating', val);
                }}
              />
            );
          }}
        </Field>

        <StyledLabel htmlFor="resume"> {t('resumeRating')}</StyledLabel>

        <Field name="resume">
          {({ form, field, meta }) => {
            return (
              <div>
                <StyledTextarea
                  placeholder="..."
                  id="resume"
                  {...field}
                  type="text"
                />
                {meta.error && meta.touched ? (
                  <ErrorContainer>{meta.error}</ErrorContainer>
                ) : null}
              </div>
            );
          }}
        </Field>

        <BtnWrapper>
          <Button
            type="button"
            onClick={closeModal}
            textContent={t('btnBack')}
            size={`${sizeDetermination()}`}
          />

          <Button
            type="submit"
            textContent={t('btnSave')}
            size={`${sizeDetermination()}`}
            active
          />
        </BtnWrapper>
      </StyledForm>
    </Formik>
  );
};
