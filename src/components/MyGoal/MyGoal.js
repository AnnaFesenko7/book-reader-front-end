import { useTranslation } from 'react-i18next';

import { TrainingTitle } from 'components/TrainingTitle/TrainingTitle';
import {
  MyGoalMainBox,
  StatsBox,
  MyGoalStatsList,
  MyGoalStatsListItem,
  MyGoalStatsDigitBox,
  MyGoalStatsText,
} from './MyGoal.styled';

export const MyGoal = ({ trainingStarted, statistic }) => {
  const { t } = useTranslation();

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
                  isTrainingStarted={trainingStarted}
                >
                  {amount}
                </MyGoalStatsDigitBox>
                <MyGoalStatsText isTrainingStarted={trainingStarted}>
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
