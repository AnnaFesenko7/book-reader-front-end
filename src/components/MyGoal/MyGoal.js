// import { useTranslation } from 'react-i18next';

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
  // const { t } = useTranslation();
  const booksArr = useSelector(state => state.selectedDates.list);
  const books = booksArr.length;
  const startDate = Date.parse(
    useSelector(state => state.selectedDates.startDate)
  );
  console.log('🚀 ~ file: MyGoal.js:22 ~ MyGoal ~ startDate:', startDate);

  const endDate = Date.parse(useSelector(state => state.selectedDates.endDate));
  console.log('🚀 ~ file: MyGoal.js:23 ~ MyGoal ~ endDate:', endDate);

  const deltaTime = endDate ? endDate - startDate : 0;
  console.log('🚀 ~ file: MyGoal.js:23 ~ MyGoal ~  deltaTime:', deltaTime);

  const { days } = convertMs(0);
  const statistic = [
    { param: 'books', text: 'Кількість книжок', amount: books },
    { param: 'days', text: 'Кількість днів', amount: days },
    // { param: 'booksLeft', text: 'Залишилось книжок', amount: booksLeft },
  ];

  return (
    <>
      <MyGoalMainBox>
        {/* <h3 className={s.myGoalHeading}> {t('myGoals')} </h3> */}
        <TrainingTitle text={'myGoals'} />

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
