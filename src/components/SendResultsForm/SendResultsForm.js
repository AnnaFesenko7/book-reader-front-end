// import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/StyledButton/StyledButton ';
// import { trainingThunk } from 'redux/training';

// import ModalFinish from 'components/ModalFinish/ModalFinish';

import { readingResultSchema } from 'validSchemas/readingResultSchema';

import {
  StyledField,
  StyledDateView,
  styleForPageInput,
  StyledInputsWrapper,
  StyledLabel,
  StyledForm,
} from './SendResultsForm.styled';

export const SendResultsForm = ({ onAddResultClick, completed }) => {
  const { t } = useTranslation();
  // const dispatch = useDispatch();

  const initialValues = {
    dateInput: new Date(),
    pageInput: '',
  };

  const handleSubmit = (val, { resetForm }) => {
    resetForm();
    onAddResultClick(val);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={readingResultSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <StyledInputsWrapper>
          <StyledLabel htmlFor="dateInput">
            {t('date')}
            <div>
              <Field name="dateInput">
                {({ form, field }) => {
                  const { setFieldValue } = form;
                  const { value } = field;
                  return (
                    <StyledDateView
                      id="dateInput"
                      selected={value}
                      onChange={val => setFieldValue(val)}
                      closeOnScroll={true}
                      dateFormat=" dd.MM.yyyy"
                      maxDate={Date.now()}
                      showDisabledMonthNavigation
                    />
                  );
                }}
              </Field>
              <ErrorMessage name="dateInput" />
            </div>
          </StyledLabel>

          <StyledLabel htmlFor="pageInput">
            {t('amountOfPages_results')}
            <StyledField>
              <Field
                type="number"
                name="pageInput"
                style={styleForPageInput}
              ></Field>
            </StyledField>
          </StyledLabel>
        </StyledInputsWrapper>
        <Button
          center
          active
          textContent={t('addResult')}
          disabled={completed}
          size={240}
          type="submit"
          height={40}
        ></Button>

        {/* <button className={s.addResultBtn} type="submit">
          {}
        </button> */}
        {/* {open && <ModalFinish onClose={handleExit} />} */}
        {/* </form> */}
      </StyledForm>
    </Formik>
  );
};
