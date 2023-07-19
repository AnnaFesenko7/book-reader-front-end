import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { trainingSelectors } from 'redux/training';
import * as format from 'helpers/formatDate';
import { useTranslation } from 'react-i18next';
import {
  ChartBox,
  StyledTitle,
  StyledSpan,
  LineBox,
  LineList,
  LineItem,
  StyledP,
} from './LineChart.styled';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

export const LineChart = ({ days, totalPagesInTraining, startDate }) => {
  const { t } = useTranslation();
  const results = useSelector(trainingSelectors.results);

  const labelsArr = Array.apply(null, Array(days));

  labelsArr.forEach((_, index, array) => {
    array[index] = format.dayLikeChartLabel(
      new Date(startDate + index * 24 * 60 * 60 * 1000)
    );
  });

  const averageNumberOfPagesPerDay = days > 0 ? totalPagesInTraining / days : 0;
  const planArr = Array.apply(null, Array(days));

  planArr.forEach((_, index, array) => {
    array[index] = Math.round(
      averageNumberOfPagesPerDay + averageNumberOfPagesPerDay * index
    );
  });

  const resultsByDay = results?.reduce((obj, result) => {
    const day = format.dayLikeChartLabel(result.date);
    return { ...obj, [day]: obj[day] ? obj[day] + result.pages : result.pages };
  }, {});

  const factArr = labelsArr.reduce((acc, data, index, arr) => {
    const resultDates = Object.keys(resultsByDay);
    const lastDate = resultDates[resultDates.length - 1];
    const indexLastDate = arr.indexOf(lastDate);
    if (index === 0) {
      return [resultsByDay[data] ? resultsByDay[data] : 0];
    }
    if (index > indexLastDate) {
      return [...acc];
    }

    return [
      ...acc,
      resultsByDay[data]
        ? resultsByDay[data] + acc[acc.length - 1]
        : acc[acc.length - 1],
    ];
  }, []);

  const lab = labelsArr.length > 0 ? [...labelsArr] : ['', '', '', ''];
  const plan = planArr.length > 0 ? [...planArr] : [5];
  const fact = factArr.length > 0 ? [...factArr] : [0];

  const labels = [...lab];
  const data = {
    labels,
    datasets: [
      {
        label: 'Plan',
        data: [...plan],
        lineTension: 0.3,
        borderColor: '#091e3f',
        pointBackgroundColor: '#091e3f',
        pointHoverRadius: 10,
        pointRadius: 8,
        PointHitRadius: 10,
      },
      {
        label: 'Fact',
        data: [...fact],
        lineTension: 0.3,
        borderColor: '#ff6b08',
        pointBackgroundColor: '#ff6b08',
        pointHoverRadius: 10,
        pointRadius: 8,
        PointHitRadius: 10,
      },
    ],
  };

  return (
    <ChartBox>
      <StyledTitle>
        {t('number_of_pages_a_day')}

        <StyledSpan>{Math.round(averageNumberOfPagesPerDay)}</StyledSpan>
      </StyledTitle>
      <LineBox>
        <LineList>
          <LineItem>{t('line_chart_plan')}</LineItem>
          <LineItem accent>{t('line_chart_fact')}</LineItem>
        </LineList>
      </LineBox>
      <Line options={options} data={data} />
      <StyledP>{t('line_chart_time')}</StyledP>
    </ChartBox>
  );
};
