import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { convertMs } from 'helpers/convertMs';

import {
  selectedDatesSelectors,
  selectedDatesActions,
} from 'redux/selectedDates';
import { trainingSelectors, trainingThunk } from 'redux/training';
import { userSelectors, userThunk } from 'redux/auth';

import { LineChart } from 'components/LineChart/LineChart';
import { MyGoal } from 'components/MyGoal/MyGoal';
import { MobileLinkToForm } from 'components/MobileLinkToForm/MobileLinkToForm';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { CenterFlexBox } from 'components/CenterFlexBox/CenterFlexBox';
import { BookTableMobile } from 'components/BookTableMobile/BookTableMobile';
import { Button } from 'components/StyledButton/StyledButton ';

const MobileTrainBookTable = () => {
  useLogOutRedirect();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(trainingSelectors.booksList);
  const isTrainingStarted = useSelector(userSelectors.isTrainingStarted);
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  const selectedBooks = useSelector(selectedDatesSelectors.booksList);
  const selectedEndDate = useSelector(selectedDatesSelectors.endDate);
  const selectedStartDate = useSelector(selectedDatesSelectors.startDate);
  const { days: prevPeriod } = convertMs(selectedEndDate - selectedStartDate);
  const period = selectedEndDate === '' ? 0 : prevPeriod;
  const myGoalParams = [
    { param: 'books', text: t('amountOfBooks'), amount: selectedBooks.length },
    { param: 'days', text: t('amountOfDays'), amount: period },
  ];
  const totalPagesInSelectedBooks = selectedBooks.reduce(
    (previousValue, book) => previousValue + book.pages,
    0
  );

  const isExistNoSaveTrainingDate =
    !isTrainingStarted && selectedBooks?.length > 0 && selectedEndDate !== '';

  const onStartTrainingClick = () => {
    dispatch(userThunk.changeTrainingStatusThunk(true));
    dispatch(
      trainingThunk.addTrainingThank({
        startDate: selectedStartDate,
        finishDate: selectedEndDate,
        books: selectedBooks,
      })
    );
    dispatch(selectedDatesActions.resetSelectedDates());
    navigate('/training', { replace: true });
  };

  return (
    <StyledContainer>
      <CenterFlexBox style={{ paddingBottom: '100px' }}>
        <MyGoal statistic={myGoalParams} />
        <BookTableMobile
          books={isTrainingStarted ? books : selectedBooks}
          startedTraining={isTrainingStarted ? true : false}
          training={isTrainingStarted ? false : true}
        />
        <Button
          onClick={onStartTrainingClick}
          textContent={t('startTraining')}
          active
          size={171}
          disabled={!isExistNoSaveTrainingDate}
          type="button"
        />
        <LineChart
          days={period}
          totalPagesInTraining={totalPagesInSelectedBooks}
          startDate={selectedStartDate}
        />
        {isMobileDevice && (
          <>
            <MobileLinkToForm to="/training" />
          </>
        )}
      </CenterFlexBox>
    </StyledContainer>
  );
};
export default MobileTrainBookTable;
