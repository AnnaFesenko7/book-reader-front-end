import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

import { TrainingTitle } from 'components/TrainingTitle/TrainingTitle';
import { SelectBooks } from 'components/SelectBooks/SelectBooks';
import {
  StyledControlsWrapper,
  TrainingWrapper,
} from './TrainingDataSelection.style';

export const TrainingDataSelection = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [selectedBooksIdList, setSelectedBooksIdList] = useState([]);

  const onAddBtnClick = bookId => {
    setSelectedBooksIdList(prevList => [...prevList, bookId]);
    console.log(selectedBooksIdList);
  };

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
            minDate={Date.now()}
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
        <SelectBooks onAddBtnClick={onAddBtnClick} />
      </TrainingWrapper>
    </>
  );
};
