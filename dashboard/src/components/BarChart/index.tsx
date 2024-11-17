import {
    CategoryScale,
    ChartData,
    Chart as ChartJS,
    Colors,
    Legend,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.defaults.font.family = 'Helvetica';
ChartJS.defaults.font.size = 16;
ChartJS.defaults.font.weight = 'bolder';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Colors
);

const BarChart = ({
    chartData,
    yLabel,
}: {
    chartData: ChartData<'bar', number[], unknown>;
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
                    display: false,
                    padding: { top: 10, bottom: 10 },
                    text: 'ID',
                },
                ticks: {
                    font: {
                        size: 11.67,  // Ajuste o tamanho da fonte aqui
                    },
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
        <Bar data={chartData} options={options} style={{ padding: '15px' }} />
    );
};

export default BarChart;
