import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { userSelectors, userThunk } from 'redux/auth';
import { selectedDatesSelectors } from 'redux/selectedDates';
import { trainingSelectors, trainingThunk } from 'redux/training';
import { convertMs } from 'helpers/convertMs';

import { TrainingDataSelection } from 'components/TrainingDataSelection/TrainingDataSelection';
import { MyGoal } from 'components/MyGoal/MyGoal';
import { BookTableMobile } from 'components/BookTableMobile/BookTableMobile';
import { Timer } from 'components/Timer/Timer';
import { LibBookTable } from 'components/LibBookTable/LibBookTable';
import { ReadingInformation } from 'components/ReadingInformation/ReadingInformation';
import { Button } from 'components/StyledButton/StyledButton ';
import { MobileLinkToSecondPage } from 'components/MobileLinkToSecondPage/MobileLinkToSecondPage';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { TrainingContainer } from 'components/TrainingContainer/TrainingContainer';
import { CenterFlexBox } from 'components/CenterFlexBox/CenterFlexBox';
import { SiteBar } from 'components/SiteBar/SiteBar';
const Training = () => {
  useLogOutRedirect();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktopDevice = useMediaQuery({ query: '(min-width: 1280px)' });

  // const [updateUi, setUpdateUi] = useState(false);
  const isTrainingStarted = useSelector(userSelectors.isTrainingStarted);
  useEffect(() => {
    if (isTrainingStarted) {
      dispatch(trainingThunk.getTrainingThank());
    }
  }, [dispatch, isTrainingStarted]);

  const selectedBooks = useSelector(selectedDatesSelectors.booksList);
  const selectedEndDate = useSelector(selectedDatesSelectors.endDate);
  const selectedStartDate = useSelector(selectedDatesSelectors.startDate);

  const books = useSelector(trainingSelectors.booksList);
  const finishDate = useSelector(trainingSelectors.finishDate);
  const startDate = useSelector(trainingSelectors.startDate);

  const deltaTime = finishDate ? finishDate - startDate : 0;
  const { days } = convertMs(deltaTime);

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
                <Timer endDate={finishDate} />
                {isDesktopDevice && (
                  <LibBookTable data={books} startedTraining />
                )}
              </CenterFlexBox>
              <SiteBar>
                <MyGoal
                  trainingStarted
                  statistic={myGoalParamsTrainingStarted}
                />
                <ReadingInformation />
              </SiteBar>
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
                <LibBookTable data={selectedBooks} training />
                <Button
                  onClick={onStartTrainingClick}
                  textContent={t('startTraining')}
                  active
                  size={200}
                  disabled={!isExistNoSaveTrainingDate}
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
