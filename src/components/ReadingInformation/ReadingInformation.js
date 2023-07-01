import { useTranslation } from 'react-i18next';
import { SendForm } from 'components/SendForm/SendForm';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { Wrapper, StyledTitle } from './ReadingInformation.styled';

export const ReadingInformation = () => {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <div>
          <StyledTitle> {t('results')}</StyledTitle>
          <SendForm
          //   startDate={startDateFromTraining}
          //   refetchFucntion={refetch}
          />
        </div>
        <div>
          <StyledTitle> {t('statistics')}</StyledTitle>
          <StatisticsList />
        </div>
      </Wrapper>
    </>
  );
};
