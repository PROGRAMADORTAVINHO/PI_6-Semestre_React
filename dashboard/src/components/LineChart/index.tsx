import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Colors,
  Legend,
  LinearScale,
  LineElement,
  Point,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.defaults.font.family = 'Helvetica';
ChartJS.defaults.font.size = 16;
ChartJS.defaults.font.weight = 'bolder';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors
);

const LineChart = ({
  chartData,
  yLabel,
}: {
  chartData: ChartData<'line', (number | Point | null)[], unknown>;
  yLabel: string;
}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom' as const,
      },
      colors: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          padding: { top: 10, bottom: 10 },
          text: 'ID',
        },
      },
      y: {
        title: {
          display: true,
          padding: { bottom: 30 },
          text: yLabel,
        },
      },
    },
  };

  return (
    <Line data={chartData} options={options} style={{ padding: '15px' }} />
  );
};

export default LineChart;
