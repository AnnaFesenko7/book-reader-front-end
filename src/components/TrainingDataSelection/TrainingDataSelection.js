import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  startDateAction,
  endDateAction,
} from 'redux/selectedDates/selectedDatesSlice';

import { TrainingTitle } from 'components/TrainingTitle/TrainingTitle';
import { SelectBooks } from 'components/SelectBooks/SelectBooks';
import {
  StyledControlsWrapper,
  TrainingWrapper,
} from './TrainingDataSelection.style';

export const TrainingDataSelection = () => {
  const start = useSelector(state => state.selectedDates.startDate);
  const end = useSelector(state => state.selectedDates.endDate);
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startDateAction(startDate));
  }, [dispatch, startDate]);

  useEffect(() => {
    dispatch(endDateAction(endDate));
  }, [dispatch, endDate]);

  return (
    <>
      <TrainingWrapper>
        <TrainingTitle text="Моє тренування" />
        <StyledControlsWrapper>
          <DatePicker
            showIcon
            selected={start}
            onChange={date => setStartDate(date)}
            closeOnScroll={true}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            selectsStart
            minDate={Date.now()}
            showDisabledMonthNavigation
            placeholderText="Початок"
          />

          <DatePicker
            showIcon
            selected={end}
            onChange={date => setEndDate(date)}
            closeOnScroll={true}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            selectsEnd
            minDate={startDate}
            showDisabledMonthNavigation
            placeholderText="Завершення"
          />
        </StyledControlsWrapper>
        <SelectBooks />
      </TrainingWrapper>
    </>
  );
};
