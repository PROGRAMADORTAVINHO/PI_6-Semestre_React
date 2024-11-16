import './HoverSensor.css';

const Gallery = () => {
  return (
    <>
      <div className='title_sensor'>
        {' '}
        <h2> Componentes </h2>{' '}
      </div>

      <div className='hoverSensor'>
        <div className='conterner'>
          {data_sensor.map((d) => (
            <div className='card'>
              <div className='face face1'>
                <div className='content'>
                  <img src={d.img} alt=''></img>
                </div>
              </div>
              <div className='face face2'>
                <div className='content'>
                  <h3>{d.sensor}</h3>
                  <p> {d.descriptions} </p>
                  <a href={d.link} target='_blank'>
                    Datasheet
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='HoverESP2'>
        <div className='conterner'>
          {data_ESP.map((d) => (
            <div className='card'>
              <div className='face face1'>
                <div className='content'>
                  <img src={d.img} alt=''></img>
                </div>
              </div>
              <div className='face face2'>
                <div className='content'>
                  <h3>{d.sensor}</h3>
                  <p> {d.descriptions} </p>
                  <a href={d.link} target='_blank'>
                    Datasheet
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='espaco'></div>
    </>
  );
};

const data_sensor = [
  {
    img: 'Sensor/acelerometro.jpg',
    sensor: 'Acelerômetro',
    descriptions:
      'O acelerômetro MPU6050 é um sensor que mede aceleração e orientação, detectando movimentos e rotações em três eixos. Além de ser usado em dispositivos móveis, ele também serve para medir vibrações, monitorando variações de aceleração em sistemas mecânicos e ajudando em aplicações como manutenção preditiva e análise de desempenho de máquinas.',
    link: 'https://www.rsrobotica.com.br/acelerometro-mpu6050',
  },
  {
    img: 'Sensor/capacitivo.jpg',
    sensor: 'Indutivo',
    descriptions:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat libero est voluptas! Consectetur vitae, rem voluptatum',
    link: 'https://www.luzautomacao.com.br/produto/sensor-capacitivo-nao-faceado-m18-sn-8mm-npn-12v-24v-4-fios-1na-1nf-metaltex',
  },
  {
    img: 'Sensor/termopar.jpg',
    sensor: 'Termopar',
    descriptions:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat libero est voluptas! Consectetur vitae, rem voluptatum',
    link: 'https://www.dkaautomacao.com.br/produto/termopar-tipopt100-3-fios-sensor-47mm-x-80mm-cabo-malha-1mt',
  },
];

const data_ESP = [
  {
    img: 'Sensor/ESP_8266.jpg',
    sensor: 'ESP 8266',
    descriptions:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat libero est voluptas! Consectetur vitae, rem voluptatum',
    link: 'https://www.rsrobotica.com.br/acelerometro-mpu6050',
  },
  {
    img: 'Sensor/ESP_32.jpeg',
    sensor: 'ESP 32',
    descriptions:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat libero est voluptas! Consectetur vitae, rem voluptatum',
    link: 'https://www.luzautomacao.com.br/produto/sensor-capacitivo-nao-faceado-m18-sn-8mm-npn-12v-24v-4-fios-1na-1nf-metaltex',
  },
  {
    img: 'Sensor/Weg-10064372.jpeg',
    sensor: 'Motor',
    descriptions:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat libero est voluptas! Consectetur vitae, rem voluptatum',
    link: 'https://www.dkaautomacao.com.br/produto/termopar-tipopt100-3-fios-sensor-47mm-x-80mm-cabo-malha-1mt',
  },
];
export default Gallery;
