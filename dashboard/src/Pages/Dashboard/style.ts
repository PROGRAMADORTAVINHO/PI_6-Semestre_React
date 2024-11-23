import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; /* Alinha as linhas de gráficos verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  margin-top: 10px;
`;

const Temperatura = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const AccelerationX = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const AccelerationY = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const AccelerationZ = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const Media = styled.div`
  margin-top: 10px;
  background-color: #fff;
  width: 50%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  text-align: center;

  @media (max-width: 768px) {
    width: 90%; /* Ajusta a largura para ocupar mais espaço em telas menores */
  }
`;

const AccelerationXYZ = styled.div`
  margin-top: 10px;
  background-color: #fff;
  width: 90%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const ChartsContainer = styled.div`
  margin-top: 10px;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px; /* Espaçamento opcional entre as divs */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Alinha uma div por linha em telas menores */
  }
`;

const Espaco = styled.div`
  height: 100px;
`;

export {
  AccelerationXYZ,
  Media,
  ChartsContainer,
  MainContainer,
  Temperatura,
  AccelerationX,
  AccelerationY,
  AccelerationZ,
  Espaco,
};
