import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { booksThunk } from 'redux/books';
import ReactStars from 'react-rating-stars-component';
import { Formik, Field } from 'formik';
import { schemaValidChooseRating } from 'validSchemas/schemaValidChooseRating';
import { Button } from 'components/StyledButton/StyledButton ';
import {
  StyledForm,
  StyledLabel,
  BtnWrapper,
} from './ResumeModalContent.styled';

export const ResumeModalContent = ({
  closeModal,
  id,
  currentBookResume,
  currentBookRating,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  const handleSubmit = val => {
    console.log(val);
    dispatch(booksThunk.feedbackThunk({ feedback: val, id: id }));
    closeModal();
  };
  const sizeDetermination = () => {
    return isMobileDevice ? 97 : 130;
  };

  return (
    <Formik
      initialValues={{ resume: currentBookResume, rating: currentBookRating }}
      onSubmit={handleSubmit}
      validationSchema={schemaValidChooseRating}
    >
      <StyledForm>
        <StyledLabel htmlFor="rating">
          {t('chooseRating')}
          <Field name="rating">
            {({ form, field, meta }) => {
              const { setFieldValue } = form;
              const { value } = field;
              console.log(
                '🚀 ~ file: ResumeModalContent.js:51 ~ value :',
                value
              );

              return (
                <ReactStars
                  id="rating"
                  type="number"
                  {...field}
                  count={5}
                  activeColor="#FF6B08"
                  size={17}
                  color="#A6ABB9"
                  value={value}
                  onChange={val => {
                    console.log('val', val);
                    setFieldValue('rating', val);
                  }}
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
        </StyledLabel>

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
