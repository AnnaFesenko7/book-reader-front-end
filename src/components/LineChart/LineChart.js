import { Line } from 'react-chartjs-2';

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels,
  datasets: [
    {
      label: 'Plan',
      data: [1, 2, 3, 4, 5, 6, 7],
      lineTension: 0.3,
      borderColor: '#091e3f',
      pointBackgroundColor: '#091e3f',
      pointHoverRadius: 10,
      pointRadius: 8,
      PointHitRadius: 10,
    },
    {
      label: 'Fact',
      data: [8, 9, 10, 11, 12, 13, 14],
      lineTension: 0.3,
      borderColor: '#ff6b08',
      pointBackgroundColor: '#ff6b08',
      pointHoverRadius: 10,
      pointRadius: 8,
      PointHitRadius: 10,
    },
  ],
};

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

export const LineChart = () => {
  return <Line options={options} data={data} />;
};
