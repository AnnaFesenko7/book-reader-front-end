import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { userSelectors, userThunk } from 'redux/auth';
import { selectedDatesSelectors } from 'redux/selectedDates';
import { trainingThunk } from 'redux/training';
import { convertMs } from 'helpers/convertMs';

import { TrainingDataSelection } from 'components/TrainingDataSelection/TrainingDataSelection';
import { MyGoal } from 'components/MyGoal/MyGoal';
import { BookTableMobile } from 'components/BookTableMobile/BookTableMobile';
import { Timer } from 'components/Timer/Timer';
import { LibBookTable } from 'components/LibBookTable/LibBookTable';
import { Button } from 'components/StyledButton/StyledButton ';
import { MobileLinkToSecondPage } from 'components/MobileLinkToSecondPage/MobileLinkToSecondPage';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { TrainingContainer } from 'components/TrainingContainer/TrainingContainer';
import { CenterFlexBox } from 'components/CenterFlexBox/CenterFlexBox';

const Training = () => {
  useLogOutRedirect();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktopDevice = useMediaQuery({ query: '(min-width: 1280px)' });

  const books = useSelector(selectedDatesSelectors.booksList);
  const endDate = useSelector(selectedDatesSelectors.endDate);
  const startDate = useSelector(selectedDatesSelectors.startDate);
  const isTrainingStarted = useSelector(userSelectors.isTrainingStarted);
  const deltaTime = endDate ? endDate - startDate : 0;
  const { days } = convertMs(deltaTime);

  const isExistTrainingDate = books.length > 0 && endDate !== '';

  const onStartTrainingClick = () => {
    dispatch(userThunk.changeTrainingStatusThunk(true));
    dispatch(
      trainingThunk.addTrainingThank({
        startDate,
        finishDate: endDate,
        books,
      })
    );
  };
  const myGoalParams = [
    { param: 'books', text: t('amountOfBooks'), amount: books.length },
    { param: 'days', text: t('amountOfDays'), amount: days },
  ];
  const myGoalParamsTrainingStarted = [
    { param: 'books', text: t('amountOfBooks'), amount: books.length },
    { param: 'days', text: t('amountOfDays'), amount: days },
    { param: 'booksLeft', text: t('booksLeft'), amount: 5 },
  ];

  return (
    <StyledContainer>
      <CenterFlexBox>
        {isTrainingStarted ? (
          <>
            <TrainingContainer trainingStarted>
              <CenterFlexBox>
                <Timer endDate={endDate} />
                {isDesktopDevice && (
                  <LibBookTable data={books} startedTraining />
                )}
              </CenterFlexBox>

              <MyGoal trainingStarted statistic={myGoalParamsTrainingStarted} />
            </TrainingContainer>

            {!isDesktopDevice && !isMobileDevice && (
              <LibBookTable data={books} startedTraining />
            )}

            {isMobileDevice && (
              <BookTableMobile books={books} startedTraining />
            )}
          </>
        ) : (
          <>
            {isMobileDevice ? (
              <>
                <MobileLinkToSecondPage to="/mobileTraingBookTable " />
                <TrainingDataSelection />
              </>
            ) : (
              <>
                <TrainingContainer>
                  <TrainingDataSelection />
                  <MyGoal statistic={myGoalParams} />
                </TrainingContainer>
                <LibBookTable data={books} training />
                <Button
                  onClick={onStartTrainingClick}
                  textContent={t('startTraining')}
                  active
                  size={200}
                  disabled={!isExistTrainingDate}
                  type="button"
                />
              </>
            )}
          </>
        )}
        {/* {!isMobileDevice && <LibBookTable data={books} training />} */}
      </CenterFlexBox>
    </StyledContainer>
  );
};

export default Training;
