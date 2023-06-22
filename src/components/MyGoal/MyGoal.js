import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { convertMs } from 'helpers/convertMs';
import { TrainingTitle } from 'components/TrainingTitle/TrainingTitle';
import {
  MyGoalMainBox,
  StatsBox,
  MyGoalStatsList,
  MyGoalStatsListItem,
  MyGoalStatsDigitBox,
  MyGoalStatsText,
} from './MyGoal.styled';

export const MyGoal = ({ booksLeft = 1, isTrainingStarted = false }) => {
  const { t } = useTranslation();

  const books = useSelector(state => state.selectedDates.list).length;
  const startDate = useSelector(state => state.selectedDates.startDate);
  const endDate = useSelector(state => state.selectedDates.endDate);
  const deltaTime = endDate ? endDate - startDate : 0;
  const { days } = convertMs(deltaTime);

  const statistic = [
    { param: 'books', text: t('amountOfBooks'), amount: books },
    { param: 'days', text: t('amountOfDays'), amount: days },
    // { param: 'booksLeft', text: 'Залишилось книжок', amount: booksLeft },
  ];

  return (
    <>
      <MyGoalMainBox>
        <TrainingTitle text={t('myGoals')} />

        <StatsBox>
          <MyGoalStatsList>
            {statistic.map(({ param, text, amount }) => (
              <MyGoalStatsListItem key={param}>
                <MyGoalStatsDigitBox
                  param={param}
                  isTrainingStarted={isTrainingStarted}
                >
                  {amount}
                </MyGoalStatsDigitBox>
                <MyGoalStatsText isTrainingStarted={isTrainingStarted}>
                  {text}
                </MyGoalStatsText>
              </MyGoalStatsListItem>
            ))}
          </MyGoalStatsList>
        </StatsBox>
      </MyGoalMainBox>
    </>
  );
};
