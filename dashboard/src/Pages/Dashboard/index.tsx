import axios from 'axios';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import LineChartMultiple from '../../components/LineChartMultiple';
import BarChart from '../../components/BarChart';
import {
  AccelerationXYZ,
  ChartsContainer,
  MainContainer,
  Temperatura,
  Media,
  Espaco,
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
  label: string | string[],
  keys: Array<keyof Data>,
  backgroundColors: string[]
) => {
  const calculateAverage = (key: keyof Data) => {
    const total = data.reduce((sum, item) => sum + (item[key] as number), 0);
    return total / data.length;
  };

  const averages = keys.map((key) => calculateAverage(key));

  return {
    labels: [0],
    datasets: keys.map((key, index) => ({
      label: Array.isArray(label) ? label[index] : `${label} (${String(key)})`,
      data: [averages[index]],
      backgroundColor: [backgroundColors[index % backgroundColors.length]],
      borderColor: [backgroundColors[index % backgroundColors.length]],
    })),
  };
};


const Dashboard = () => {
  const [temperatureData, setTemperatureData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [accelerationXYZData, setAccelerationXYZData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [averageData, setAverageData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api-fkun.onrender.com/data');

      setTemperatureData(
        generateChartData(
          response.data as Data[],
          'Temperatura (°C)',
          'temperature',
          'red'
        )
      );

      setAccelerationXYZData(
        generateChartDataMultiple(
          response.data as Data[],
          ['Aceleração no eixo X','Aceleração no eixo Y','Aceleração no eixo Z'],
          ['acceleration_x','acceleration_y','acceleration_z'],
          ['blue', 'green', 'red'],
        )
      );

      setAverageData(
        generateBarChartData(
          response.data as Data[],
          ['Aceleração no eixo X', 'Aceleração no eixo Y', 'Aceleração no eixo Z', 'Temperatura'],
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

          <Media>
            <BarChart
              chartData={averageData}
              yLabel={'Média'}
            />
          </Media>

        </ChartsContainer>

        <AccelerationXYZ>
            <LineChartMultiple
              chartData={accelerationXYZData}
              yLabel={'Aceleração (m/s²)'}
            />
          </AccelerationXYZ>

      </MainContainer>
      <Espaco></Espaco>
    </>
  );
};

export default Dashboard;