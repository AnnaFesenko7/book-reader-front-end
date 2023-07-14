import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { convertMs } from 'helpers/convertMs';
import { useModal } from 'hooks/useModal';
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

import { userSelectors, userThunk } from 'redux/auth';
import { trainingSelectors, trainingThunk } from 'redux/training';
import { booksSelectors, booksThunk } from 'redux/books';
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
  const isDesktopDevice = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    dispatch(booksThunk.getBooksThunk());
  }, [dispatch]);

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

  const allBooks = useSelector(booksSelectors.getBooks);

  const booksIdArr = useSelector(trainingSelectors.booksList);

  const books = booksIdArr.reduce(
    (arr, bookId) => {
      return [...arr, allBooks.find(book => book._id === bookId)];
    },

    []
  );

  const finishDate = useSelector(trainingSelectors.finishDate);
  const startDate = useSelector(trainingSelectors.startDate);
  const id = useSelector(trainingSelectors.id);
  //загалом сторінок в тренуванні
  const totalPagesInTraining = books.reduce(
    (previousValue, book) => previousValue + book.pages,
    0
  );

  const isTrainingCompleted = useSelector(trainingSelectors.completed);
  const deltaTime = finishDate ? finishDate - startDate : 0;
  const { days } = convertMs(deltaTime);
  const booksLeft = books?.filter(book => book.status !== 'haveRead')?.length;
  const myGoalParamsTrainingStarted = [
    { param: 'books', text: t('amountOfBooks'), amount: books?.length },
    { param: 'days', text: t('amountOfDays'), amount: days },
    { param: 'booksLeft', text: t('booksLeft'), amount: booksLeft },
  ];

  useEffect(() => {
    if (isTrainingStarted) {
      dispatch(trainingThunk.getTrainingThank());
    }
  }, [dispatch, isTrainingStarted]);

  // useEffect(() => {
  //   dispatch(booksThunk.getBooksThunk());
  // }, [dispatch]);

  const { closeModal, isModalOpen } = useModal(isTrainingCompleted);

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
    closeModal();
    dispatch(trainingThunk.deleteTrainingThank(id));
    dispatch(userThunk.changeTrainingStatusThunk(false));
  };

  return (
    <>
      <StyledContainer>
        <CenterFlexBox>
          {isTrainingStarted ? (
            <>
              <TrainingContainer trainingStarted>
                <CenterFlexBox>
                  <Timer endDate={finishDate} />
                  {isDesktopDevice && (
                    <>
                      <LibBookTable data={books} startedTraining updateUi />
                      <LineChart
                        days={days}
                        totalPagesInTraining={totalPagesInTraining}
                      />
                    </>
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
                <>
                  <LibBookTable data={books} startedTraining />
                  <LineChart
                    days={days}
                    totalPagesInTraining={totalPagesInTraining}
                  />
                </>
              )}

              {isMobileDevice && (
                <>
                  <BookTableMobile books={books} startedTraining />
                  <LineChart
                    days={days}
                    totalPagesInTraining={totalPagesInTraining}
                  />
                </>
              )}
            </>
          ) : (
            <>
              {isMobileDevice ? (
                <>
                  <MobileLinkToSecondPage to="/mobileTrainingBookTable " />
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

      <FinishModal
        isModalOpen={isModalOpen}
        closeModal={onFinishModalBtnClick}
      />
    </>
  );
};

export default Training;
