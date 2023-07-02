import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { trainingSelectors, trainingThunk } from 'redux/training';
import { SendForm } from 'components/SendForm/SendForm';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { Wrapper, StyledTitle } from './ReadingInformation.styled';

export const ReadingInformation = () => {
  const dispatch = useDispatch();
  const results = useSelector(trainingSelectors.results);

  useEffect(() => {
    dispatch(trainingThunk.getTrainingThank());
  }, [dispatch, results]);

  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <div>
          <StyledTitle> {t('results')}</StyledTitle>
          <SendForm />
        </div>
        <div>
          <StyledTitle> {t('statistics')}</StyledTitle>
          <StatisticsList results={results} />
        </div>
      </Wrapper>
    </>
  );
};
