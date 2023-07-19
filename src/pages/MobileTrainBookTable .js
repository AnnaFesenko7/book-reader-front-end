import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { convertMs } from 'helpers/convertMs';

import { selectedDatesSelectors } from 'redux/selectedDates';
import { trainingSelectors } from 'redux/training';
import { userSelectors } from 'redux/auth';

import { LineChart } from 'components/LineChart/LineChart';
import { MyGoal } from 'components/MyGoal/MyGoal';
import { MobileLinkToForm } from 'components/MobileLinkToForm/MobileLinkToForm';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { CenterFlexBox } from 'components/CenterFlexBox/CenterFlexBox';
import { BookTableMobile } from 'components/BookTableMobile/BookTableMobile';

const MobileTrainBookTable = () => {
  useLogOutRedirect();
  const { t } = useTranslation();
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

  return (
    <StyledContainer>
      <CenterFlexBox style={{ paddingBottom: '100px' }}>
        <MyGoal statistic={myGoalParams} />
        <BookTableMobile
          books={isTrainingStarted ? books : selectedBooks}
          startedTraining={isTrainingStarted ? true : false}
          training={isTrainingStarted ? false : true}
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
