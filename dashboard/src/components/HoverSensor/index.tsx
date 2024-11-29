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
                    Saiba Mais
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
      'O acelerômetro MPU6050 mede aceleração e orientação em três eixos, sendo útil para detectar vibrações em sistemas mecânicos e auxiliar em manutenção preditiva e análise de máquinas.',
    link: 'https://www.eletrogate.com/acelerometro-e-giroscopio-3-eixos-6-dof-mpu-6050-gy-521?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&utm_source=google&utm_medium=cpc&utm_campaign=[MC4]_[G]_[PMax]_Categorias&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAiAxqC6BhBcEiwAlXp45zu2pCM8obLUKc-oeUWg6hozcdFitaKB4eLUNMpsn-iaG2Yb42jPvBoCl9QQAvD_BwE',
  },
  {
    img: 'Sensor/capacitivo.jpg',
    sensor: 'Indutivo',
    descriptions:
      'O sensor indutivo detecta objetos metálicos sem contato, usando variações em um campo eletromagnético. É amplamente usado na automação industrial para monitorar posição e proximidade com precisão e resistência.',
    link: 'https://www.luzautomacao.com.br/produto/sensor-capacitivo-nao-faceado-m18-sn-8mm-npn-12v-24v-4-fios-1na-1nf-metaltex',
  },
  {
    img: 'Sensor/termopar.jpg',
    sensor: 'Termopar',
    descriptions:
      'O termopar tipo T, é um sensor de alta precisão usado para medir temperaturas de -200°C a 350°C. É ideal para aplicações industriais e laboratoriais, devido à sua estabilidade e resistência à corrosão.',
    link: 'https://www.dkaautomacao.com.br/produto/termopar-tipopt100-3-fios-sensor-47mm-x-80mm-cabo-malha-1mt',
  },
];

const data_ESP = [
  {
    img: 'Sensor/ESP_8266.jpg',
    sensor: 'ESP 8266',
    descriptions:
      'A ESP8266 é um microcontrolador compacto e econômico com conectividade Wi-Fi integrada. Muito utilizada em projetos de IoT e automação residencial, permite conectar dispositivos à internet com facilidade, oferecendo boa performance e baixo consumo de energia.',
    link: 'https://www.eletrogate.com/modulo-wifi-esp8266-nodemcu-esp-12e?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&utm_source=google&utm_medium=cpc&utm_campaign=[MC4]_[G]_[PMax]_Categorias&utm_content=&utm_term=&gad_source=1&gclid=CjwKCAiAxqC6BhBcEiwAlXp45_7G2o6FhxDkAAz9op9zaJh2HPuQSdrfFZqwgkeKgKKjAoBRrWryRBoCjdYQAvD_BwE',
  },
  {
    img: 'Sensor/ESP_32.jpeg',
    sensor: 'ESP 32',
    descriptions:
      'A ESP32 é um microcontrolador poderoso e versátil, com conectividade Wi-Fi e Bluetooth integrada. Amplamente usada em projetos de IoT, automação e dispositivos inteligentes, oferece alto desempenho, baixo consumo de energia e suporte a sensores e periféricos diversos.',
    link: 'https://curtocircuito.com.br/placa-esp32-devkitc-esp-wroom-32d.html?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=7016354091&hsa_cam=16065462870&hsa_grp=130180187942&hsa_ad=579259865430&hsa_src=g&hsa_tgt=pla-387028613937&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiAxqC6BhBcEiwAlXp456HdkYCq_QK4wMxtLuK6kN6mcK6MByh2oyGJv4c8Zcq6_esfxMWVvBoCFf8QAvD_BwE',
  },
  {
    img: 'Sensor/Weg-10064372.jpeg',
    sensor: 'Motor',
    descriptions:
      'O motor WEG 10064372 é um motor elétrico trifásico, projetado para aplicações industriais que exigem alta eficiência e durabilidade. Ele é ideal para acionar máquinas e equipamentos, garantindo desempenho confiável em ambientes rigorosos.',
    link: 'https://www.meritocomercial.com.br/motor-weg-aplicacoes-gerais-ip-21-3cv-alta-rotacao-trifasico-220380v-4001001004732-p1033886?tsid=75&gad_source=1&gclid=CjwKCAiAxqC6BhBcEiwAlXp4567IxCx-SIaSpqAtjvf5z0mq3eVDlq9p09-JZzdX9NcR9eqgcIs_URoCI0gQAvD_BwE',
  },
];
export default Gallery;
