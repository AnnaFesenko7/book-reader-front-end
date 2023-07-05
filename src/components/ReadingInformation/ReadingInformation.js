// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { trainingSelectors, trainingThunk } from 'redux/training';

import { SendResultsForm } from 'components/SendResultsForm/SendResultsForm';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';

import { Wrapper, StyledTitle } from './ReadingInformation.styled';

export const ReadingInformation = ({ updateUi }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const results = useSelector(trainingSelectors.results);
  const completed = useSelector(trainingSelectors.completed);

  // useEffect(() => {
  //   dispatch(trainingThunk.completenessTrainingThank());
  // }, [dispatch, results]);

  const onAddResultClick = val => {
    dispatch(trainingThunk.addResultThank(val));
    updateUi(true);
    console.log(
      '🚀 ~ file: ReadingInformation.js:25 ~ onAddResultClick ~ updateUi:'
    );
  };

  return (
    <>
      <Wrapper>
        <div>
          <StyledTitle> {t('results')}</StyledTitle>
          <SendResultsForm
            onAddResultClick={onAddResultClick}
            completed={completed}
            // updateUi={updateUi}
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
