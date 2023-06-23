import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { userSelectors, userThunk } from 'redux/auth';
import { selectedDatesSelectors } from 'redux/selectedDates';
import { convertMs } from 'helpers/convertMs';

import { TrainingDataSelection } from 'components/TrainingDataSelection/TrainingDataSelection';
import { MyGoal } from 'components/MyGoal/MyGoal';
import { Timer } from 'components/Timer/Timer';
import { LibBookTable } from 'components/LibBookTable/LibBookTable';
import { Button } from 'components/StyledButton/StyledButton ';
import { MobileLinkToSecondPage } from 'components/MobileLinkToSecondPage/MobileLinkToSecondPage';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { TrainingContainer } from 'components/TrainingContainer/TrainingContainer';
import { WrapperBody } from 'components/WrapperBody/WrapperBody.styled';
import { CenterFlexBox } from 'components/CenterFlexBox/CenterFlexBox';

const Training = () => {
  useLogOutRedirect();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  const books = useSelector(selectedDatesSelectors.booksList);
  const endDate = useSelector(selectedDatesSelectors.endDate);
  const startDate = useSelector(selectedDatesSelectors.startDate);
  const isTrainingStarted = useSelector(userSelectors.isTrainingStarted);
  const deltaTime = endDate ? endDate - startDate : 0;
  const { days } = convertMs(deltaTime);

  let isTrainingBtnActive = true;

  if (books.length > 0 && endDate !== '') {
    isTrainingBtnActive = false;
  }

  const onStartTrainingClick = () => {
    dispatch(userThunk.changeTrainingStatusThunk(true));
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
      <WrapperBody>
        {isMobileDevice ? (
          <>
            <MobileLinkToSecondPage to="/mobileTraingBookTable " />
            <TrainingDataSelection />
          </>
        ) : (
          <CenterFlexBox>
            {isTrainingStarted ? (
              <TrainingContainer trainingStarted>
                <Timer />
                <MyGoal
                  trainingStarted
                  statistic={myGoalParamsTrainingStarted}
                />
              </TrainingContainer>
            ) : (
              <TrainingContainer>
                <TrainingDataSelection />
                <MyGoal statistic={myGoalParams} />
              </TrainingContainer>
            )}

            <LibBookTable data={books} training />
            {!isTrainingStarted && (
              <Button
                onClick={onStartTrainingClick}
                textContent={t('startTraning')}
                active
                size={200}
                disabled={isTrainingBtnActive}
                type="button"
              />
            )}
          </CenterFlexBox>
        )}
      </WrapperBody>
    </StyledContainer>
  );
};

export default Training;
