import axios from 'axios';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import BarChart from '../../components/BarChart';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import LineChartMultiple from '../../components/LineChartMultiple';
import {
  AccelerationXYZ,
  ChartsContainer,
  Espaco,
  MainContainer,
  Media,
  Temperatura,
  AccelerationX,
  AccelerationY,
  AccelerationZ
} from './style';

const dataSchema = z.object({
  id: z.number(),
  temperature: z.number(),
  acceleration_x: z.number(),
  acceleration_y: z.number(),
  acceleration_z: z.number(),
  timestamp: z.string(),
});

const datasetSchema = z.object({
  label: z.string(),
  data: z.array(z.number()),
  backgroundColor: z.array(z.string()).optional(),
  borderColor: z.array(z.string()).optional(),
  pointRadius: z.number().optional(),
});

const chartDataSchema = z.object({
  labels: z.array(z.number()),
  datasets: z.array(datasetSchema),
});

const chartData2Schema = z.object({
  labels: z.array(z.string()),
  datasets: z.array(datasetSchema),
});

type Data = z.infer<typeof dataSchema>;
type ChartData = z.infer<typeof chartDataSchema>;
type ChartData2 = z.infer<typeof chartData2Schema>;

const generateChartData = (
  data: Data[],
  label: string,
  key: keyof Data,
  backgroundColor: string
) => ({
  labels: data.map((item) => item.id),
  datasets: [
    {
      label: label,
      data: data.map((item) => item[key] as number),
      borderColor: [backgroundColor],
    },
  ],
});

const generateChartDataMultiple = (
  data: Data[],
  label: string | string[],
  keys: Array<keyof Data>,
  backgroundColors: string[]
) => ({
  labels: data.map((item) => item.id),
  datasets: keys.map((key, index) => ({
    label: Array.isArray(label)
      ? label[index % label.length]
      : `${label} (${String(key)})`,
    data: data.map((item) => item[key] as number),
    borderColor: [backgroundColors[index % backgroundColors.length]],
  })),
});

const generateBarChartData = (
  data: Data[],
  _label: string | string[],
  keys: Array<keyof Data>,
  backgroundColors: string[]
) => {
  const calculateAverage = (key: keyof Data) => {
    const total = data.reduce((sum, item) => sum + (item[key] as number), 0);
    return total / data.length;
  };

  const averages = keys.map((key) => calculateAverage(key));

  const xValues = [
    'Aceleração no eixo X',
    'Aceleração no eixo Y',
    'Aceleração no eixo Z',
    'Temperatura',
  ];

  return {
    labels: xValues, // Numérico para atender ao tipo do estado
    datasets: [
      {
        label: 'Média',
        data: averages,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors,
      },
    ],
  };
};

const Dashboard = () => {
  const [temperatureData, setTemperatureData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });
  
  const [accelerationXData, setAccelerationXData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });
  
  const [accelerationYData, setAccelerationYData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [accelerationZData, setAccelerationZData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [accelerationXYZData, setAccelerationXYZData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [averageData, setAverageData] = useState<ChartData2>({
    labels: [],
    datasets: [],
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/data`);

      setTemperatureData(
        generateChartData(
          response.data as Data[],
          'Temperatura (°C)',
          'temperature',
          'red'
        )
      );

      setAccelerationXData(
        generateChartData(
          response.data as Data[],
          'Aceleração no eixo X',
          'acceleration_x',
          'blue'
        )
      );

      setAccelerationYData(
        generateChartData(
          response.data as Data[],
          'Aceleração no eixo Y',
          'acceleration_y',
          'green'
        )
      );

      setAccelerationZData(
        generateChartData(
          response.data as Data[],
          'Aceleração no eixo Z',
          'acceleration_z',
          'purple'
        )
      );


      setAccelerationXYZData(
        generateChartDataMultiple(
          response.data as Data[],
          [
            'Aceleração no eixo X',
            'Aceleração no eixo Y',
            'Aceleração no eixo Z',
          ],
          ['acceleration_x', 'acceleration_y', 'acceleration_z'],
          ['blue', 'green', 'red']
        )
      );

      setAverageData(
        generateBarChartData(
          response.data as Data[],
          [
            'Aceleração no eixo X',
            'Aceleração no eixo Y',
            'Aceleração no eixo Z',
            'Temperatura',
          ],
          ['acceleration_x', 'acceleration_y', 'acceleration_z', 'temperature'],
          ['blue', 'green', 'purple', 'red']
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <MainContainer>
        <ChartsContainer>
          <Temperatura>
            <LineChart
              chartData={temperatureData}
              yLabel={'Temperatura (°C)'}
            />
          </Temperatura>

          <AccelerationX>
            <LineChart
              chartData={accelerationXData}
              yLabel={'Aceleração no eixo X'}
            />
          </AccelerationX>

          <AccelerationY>
            <LineChart
              chartData={accelerationYData}
              yLabel={'Aceleração no eixo Y'}
            />
          </AccelerationY>

          <AccelerationZ>
            <LineChart
              chartData={accelerationZData}
              yLabel={'Aceleração no eixo Z'}
            />
          </AccelerationZ>
        </ChartsContainer>
        <Media>
            <BarChart chartData={averageData} yLabel={'Média'} />
          </Media>
      </MainContainer>
      <Espaco></Espaco>
    </>
  );
};

export default Dashboard;
