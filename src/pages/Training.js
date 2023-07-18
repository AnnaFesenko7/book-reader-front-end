import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { convertMs } from 'helpers/convertMs';
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

import { userSelectors, userThunk } from 'redux/auth';
import { trainingSelectors, trainingThunk } from 'redux/training';
import { selectedDatesSelectors } from 'redux/selectedDates';
import { selectedDatesActions } from 'redux/selectedDates';

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
import { FinishModal } from 'components/FinishModal/FinishModal';
import { LineChart } from 'components/LineChart/LineChart';

const Training = () => {
  useLogOutRedirect();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const isTrainingStarted = useSelector(userSelectors.isTrainingStarted);

  const selectedBooks = useSelector(selectedDatesSelectors.booksList);
  const selectedEndDate = useSelector(selectedDatesSelectors.endDate);
  const selectedStartDate = useSelector(selectedDatesSelectors.startDate);
  const { days: prevPeriod } = convertMs(selectedEndDate - selectedStartDate);
  const period = selectedEndDate === '' ? 0 : prevPeriod;
  const myGoalParams = [
    { param: 'books', text: t('amountOfBooks'), amount: selectedBooks.length },
    { param: 'days', text: t('amountOfDays'), amount: period },
  ];

  const books = useSelector(trainingSelectors.booksList);

  const finishDate = useSelector(trainingSelectors.finishDate);
  const startDate = useSelector(trainingSelectors.startDate);
  const id = useSelector(trainingSelectors.id);

  const isTrainingCompleted = useSelector(trainingSelectors.completed);

  const completenessReason = useSelector(trainingSelectors.completenessReason);

  //загалом сторінок в тренуванні
  const totalPagesInTraining = books.reduce(
    (previousValue, book) => previousValue + book.pages,
    0
  );

  const deltaTime = finishDate ? finishDate - startDate : 0;
  const { days } = convertMs(deltaTime);
  const booksLeft = books?.filter(book => book.status !== 'haveRead')?.length;
  const myGoalParamsTrainingStarted = [
    { param: 'books', text: t('amountOfBooks'), amount: books?.length },
    { param: 'days', text: t('amountOfDays'), amount: days },
    { param: 'booksLeft', text: t('booksLeft'), amount: booksLeft },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (isTrainingStarted) {
      dispatch(trainingThunk.getTrainingThank());
    }
  }, [dispatch, isTrainingStarted]);

  useEffect(() => {
    if (isTrainingCompleted) {
      setIsModalOpen(true);
    }
  }, [isTrainingCompleted]);

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
  };

  const onFinishModalBtnClick = () => {
    setIsModalOpen(false);
    dispatch(trainingThunk.deleteTrainingThank(id));
    dispatch(userThunk.changeTrainingStatusThunk(false));
  };

  const exception = !isDesktop && isTrainingStarted;

  return (
    <>
      <StyledContainer>
        <CenterFlexBox>
          {isMobileDevice ? (
            <>
              {isTrainingStarted ? (
                <>
                  <Timer endDate={finishDate} />

                  <MyGoal
                    trainingStarted
                    statistic={myGoalParamsTrainingStarted}
                  />

                  <BookTableMobile books={books} startedTraining />
                  <LineChart
                    days={days}
                    totalPagesInTraining={totalPagesInTraining}
                  />
                </>
              ) : (
                <>
                  <MobileLinkToSecondPage to="/mobileTrainingBookTable " />
                  <TrainingDataSelection />
                </>
              )}
            </>
          ) : (
            <TrainingContainer
              trainingStarted={isTrainingStarted ? true : false}
            >
              <CenterFlexBox>
                {isTrainingStarted ? (
                  <>
                    <Timer endDate={finishDate} />
                    {exception && (
                      <MyGoal
                        trainingStarted
                        statistic={myGoalParamsTrainingStarted}
                      />
                    )}
                  </>
                ) : (
                  <TrainingDataSelection />
                )}

                <>
                  <LibBookTable
                    data={isTrainingStarted ? books : selectedBooks}
                    startedTraining={isTrainingStarted ? true : false}
                    training={isTrainingStarted ? false : true}
                  />
                  {!isTrainingStarted && (
                    <Button
                      onClick={onStartTrainingClick}
                      textContent={t('startTraining')}
                      active
                      size={200}
                      disabled={!isExistNoSaveTrainingDate}
                      type="button"
                    />
                  )}
                  <LineChart
                    days={days}
                    totalPagesInTraining={totalPagesInTraining}
                  />
                  {isTrainingStarted && !isDesktop && <ReadingInformation />}
                </>
              </CenterFlexBox>
              <SiteBar>
                {!exception && (
                  <MyGoal
                    trainingStarted={isTrainingStarted ? true : false}
                    statistic={
                      isTrainingStarted
                        ? myGoalParamsTrainingStarted
                        : myGoalParams
                    }
                  />
                )}
                {isTrainingStarted && isDesktop && <ReadingInformation />}
              </SiteBar>
            </TrainingContainer>
          )}
        </CenterFlexBox>
      </StyledContainer>

      <FinishModal
        completenessReason={completenessReason}
        isModalOpen={isModalOpen}
        onFinishModalBtnClick={onFinishModalBtnClick}
      />
    </>
  );
};

export default Training;

// ['noUnreadBooks', 'hasDeadlinePassed', ''];
