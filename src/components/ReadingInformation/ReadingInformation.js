import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { trainingSelectors, trainingThunk } from 'redux/training';

import { SendResultsForm } from 'components/SendResultsForm/SendResultsForm';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';

import { Wrapper, StyledTitle } from './ReadingInformation.styled';

export const ReadingInformation = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const results = useSelector(trainingSelectors.results);
  const completed = useSelector(trainingSelectors.completed);

  const onAddResultClick = async val => {
    dispatch(trainingThunk.addResultThank(val));
    // await addResult(val);
    // dispatch(trainingThunk.getTrainingThank());
  };

  return (
    <>
      <Wrapper>
        <div>
          <StyledTitle> {t('results')}</StyledTitle>
          <SendResultsForm
            onAddResultClick={onAddResultClick}
            completed={completed}
          />
        </div>
        <div>
          <StyledTitle> {t('statistics')}</StyledTitle>
          <StatisticsList results={results} />
        </div>
      </Wrapper>
    </>
  );
};
