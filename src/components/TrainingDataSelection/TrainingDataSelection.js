import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { Button } from 'components/StyledButton/StyledButton ';
import { TrainingTitle } from 'components/TrainingTitle/TrainingTitle';
import { SeleckBooks } from 'components/SeleckBooks/SeleckBooks';
import {
  StyledControlsWrapper,
  TrainingWrapper,
} from './TrainingDataSelection.style';

export const TrainingDataSelection = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  // const [arrSelectedBooks, setArrSelectedBooks] = useState([]);

  return (
    <>
      <TrainingWrapper>
        <TrainingTitle text="Моє тренування" />
        <StyledControlsWrapper>
          <DatePicker
            showIcon
            selected={startDate}
            onChange={date => setStartDate(date)}
            closeOnScroll={true}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            selectsStart
            minDate={new Date()}
            showDisabledMonthNavigation
            placeholderText="Початок"
          />

          <DatePicker
            showIcon
            selected={endDate}
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
        <SeleckBooks />
        <Button size={170} textContent="Add" type="submit" />
      </TrainingWrapper>
    </>
  );
};
