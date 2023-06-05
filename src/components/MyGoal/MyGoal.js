// import { useTranslation } from 'react-i18next';
// import { useGetAllTrainingsQuery } from 'redux/books/trainingApi';
import { useSelector } from 'react-redux';
import { TrainingTitle } from 'components/TrainingTitle/TrainingTitle';
import {
  MyGoalMainBox,
  StatsBox,
  MyGoalStatsList,
  MyGoalStatsListItem,
  MyGoalStatsDigitBox,
  MyGoalStatsText,
} from './MyGoal.styled';

export const MyGoal = ({
  days = 20,

  booksLeft = 1,
  isTrainingStarted = false,
}) => {
  // const { t } = useTranslation();
  const booksArr = useSelector(state => state.selectedBooks.list);
  const books = booksArr.length;

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
