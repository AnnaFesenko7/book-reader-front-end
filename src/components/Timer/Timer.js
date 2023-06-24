import { useTranslation } from 'react-i18next';

import { TimerItem } from 'components/TimerItem/TimerItem';

import { TimerWrapper } from './Timer.styled';

export const Timer = ({ endDate }) => {
  const { t } = useTranslation();
  const today = new Date();
  const currentYear = today.getFullYear();

  const endYear = new Date(`${currentYear}`, 12, 0);

  return (
    <TimerWrapper>
      <TimerItem selectedDate={endYear} timerTitle={t('yearsCountdown')} />
      <TimerItem selectedDate={endDate} timerTitle={t('goalsCountdown')} />
    </TimerWrapper>
  );
};
