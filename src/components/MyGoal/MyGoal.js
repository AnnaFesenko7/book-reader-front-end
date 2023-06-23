import { useTranslation } from 'react-i18next';

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

export const MyGoal = ({ isTrainingStarted = false, statistic }) => {
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
