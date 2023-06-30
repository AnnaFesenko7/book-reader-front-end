import { useTranslation } from 'react-i18next';
import { SendForm } from 'components/SendForm/SendForm';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { Wrapper, StyledTitle } from './ReadingInformation.styled';

export const ReadingInformation = () => {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <StyledTitle> {t('results')}</StyledTitle>
        <SendForm
        //   startDate={startDateFromTraining}
        //   refetchFucntion={refetch}
        />

        <StyledTitle> {t('statistics')}</StyledTitle>
        <StatisticsList />
      </Wrapper>
    </>
  );
};
