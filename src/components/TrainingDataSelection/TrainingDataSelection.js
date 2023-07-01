import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectedDatesActions } from 'redux/selectedDates';

import { TrainingTitle } from 'components/TrainingTitle/TrainingTitle';
import { SelectBooks } from 'components/SelectBooks/SelectBooks';
import {
  StyledControlsWrapper,
  TrainingWrapper,
} from './TrainingDataSelection.style';

export const TrainingDataSelection = () => {
  const { t } = useTranslation();
  const start = useSelector(state => state.selectedDates.startDate);
  const end = useSelector(state => state.selectedDates.endDate);
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);

  const dispatch = useDispatch();
  useEffect(() => {
    const data = startDate.valueOf();

    dispatch(selectedDatesActions.startDate(data));
  }, [dispatch, startDate]);

  useEffect(() => {
    const data = endDate.valueOf();

    dispatch(selectedDatesActions.endDate(data));
  }, [dispatch, endDate]);

  return (
    <>
      <TrainingWrapper>
        <TrainingTitle text={t('myTraining')} />
        <StyledControlsWrapper>
          <DatePicker
            showIcon
            selected={start}
            onChange={date => setStartDate(date)}
            closeOnScroll={true}
            dateFormat="MMMM d, yyyy h:mm aa"
            selectsStart
            minDate={Date.now()}
            showDisabledMonthNavigation
            placeholderText={t('start')}
          />

          <DatePicker
            showIcon
            selected={end}
            onChange={date => setEndDate(date)}
            closeOnScroll={true}
            dateFormat="MMMM d, yyyy h:mm aa"
            selectsEnd
            minDate={startDate}
            showDisabledMonthNavigation
            placeholderText={t('finish')}
          />
        </StyledControlsWrapper>
        <SelectBooks />
      </TrainingWrapper>
    </>
  );
};
