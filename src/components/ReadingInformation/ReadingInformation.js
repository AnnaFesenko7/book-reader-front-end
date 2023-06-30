import { useTranslation } from 'react-i18next';
import { SendForm } from 'components/SendForm/SendForm';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import s from './training.module.css';

export const ReadingInformation = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={s.gridItem4}>
        <h2 className={s.resultsHeader}> {t('results')}</h2>
        <SendForm
        //   startDate={startDateFromTraining}
        //   refetchFucntion={refetch}
        />

        <h2 className={s.statisticsHeader}> {t('statistics')}</h2>
        <StatisticsList />
      </div>
    </>
  );
};
