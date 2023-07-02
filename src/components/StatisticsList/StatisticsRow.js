import React from 'react';
import { useTranslation } from 'react-i18next';

import { StyledItem, StyledCell } from './StatisticsList.styled';

export const StatisticsRow = ({ row }) => {
  const { date, time, pages } = row;
  const { t } = useTranslation();

  return (
    <StyledItem>
      <StyledCell>{date}</StyledCell>
      <StyledCell pale>{time}</StyledCell>
      <StyledCell>{pages}</StyledCell>
      <StyledCell pale> &nbsp;{t('results_pages')}</StyledCell>
    </StyledItem>
  );
};
