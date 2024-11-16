import axios from 'axios';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import {
  AccelerationX,
  AccelerationY,
  AccelerationZ,
  ChartsContainer,
  MainContainer,
  Temperatura,
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

type Data = z.infer<typeof dataSchema>;
type ChartData = z.infer<typeof chartDataSchema>;

const generateChartData = (
  data: Data[],
  label: string,
  key: keyof Data,
  backgroundColor: string
) => ({
  // labels: data.map((item) => new Date(item.timestamp).toLocaleTimeString()),
  labels: data.map((item) => item.id),
  datasets: [
    {
      label: label,
      data: data.map((item) => item[key] as number),
      borderColor: [backgroundColor],
    },
  ],
});

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

  const fetchData = async () => {
    try {
      const response = await axios.get('/data');

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
          'Vibração (Hz)',
          'acceleration_x',
          'blue'
        )
      );

      setAccelerationYData(
        generateChartData(
          response.data as Data[],
          'Vibração (Hz)',
          'acceleration_y',
          'blue'
        )
      );

      setAccelerationZData(
        generateChartData(
          response.data as Data[],
          'Vibração (Hz)',
          'acceleration_z',
          'blue'
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
              yLabel={'Aceleração no eixo X (m/s²)'}
            />
          </AccelerationX>

          <AccelerationY>
            <LineChart
              chartData={accelerationYData}
              yLabel={'Aceleração no eixo Y (m/s²)'}
            />
          </AccelerationY>

          <AccelerationZ>
            <LineChart
              chartData={accelerationZData}
              yLabel={'Aceleração no eixo Z  (m/s²)'}
            />
          </AccelerationZ>
        </ChartsContainer>
      </MainContainer>
    </>
  );
};

export default Dashboard;
