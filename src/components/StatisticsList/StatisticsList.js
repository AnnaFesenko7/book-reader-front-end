import StatisticsRow from './StatisticsRow';
import s from './statisticsList.module.css';

import * as format from 'helpers/formatDate';

export const StatisticsList = ({ results }) => {
  const visibleRows = results
    ?.map(({ date, pages, _id }) => ({
      date: format.date(date),
      time: format.time(date),
      pages: pages,
      id: _id,
    }))
    .reverse()
    .slice(0, 5);

  return (
    <ul className={s.statisticsList}>
      {visibleRows.map(row => (
        <StatisticsRow key={row.id} row={row} className={s.statisticsList} />
      ))}
    </ul>
  );
};
