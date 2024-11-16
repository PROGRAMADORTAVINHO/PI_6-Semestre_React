import './ContentProject.css';

const ContentProject = () => {
  return (
    <div className='container_project'>
      <div className='card_about_project'>
        <div className='card_description_about_project'>
          <h3 className='project_title'> Sistema de Telemetria </h3>
          <p className='project_txt'>
            ㅤㅤㅤA necessidade de monitorar variáveis críticas em equipamentos
            e veículos destaca a importância de sistemas avançados de
            telemetria. Esses sistemas oferecem soluções inovadoras para
            aumentar a eficiência, reduzir custos de manutenção e melhorar a
            segurança operacional em setores como o automobilístico e
            industrial. No projeto do sexto semestre de Engenharia de
            Computação, foi desenvolvido um sistema de telemetria alinhado aos
            princípios da Indústria 4.0, capaz de monitorar variáveis como
            temperatura, vibração e rotação de máquinas industriais em tempo
            real. Sensores inteligentes, como o termopar tipo T e o acelerômetro
            MPU 6050, foram integrados a um motor Weg-10064372, permitindo a
            coleta e transmissão contínua de dados para uma central de controle
            remoto. O sistema detecta anomalias, possibilitando a manutenção
            preditiva e garantindo maior eficiência e sustentabilidade. Essa
            abordagem contribui para o controle operacional e para a
            durabilidade dos equipamentos, alinhando tecnologia avançada à
            automação e sustentabilidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentProject;
