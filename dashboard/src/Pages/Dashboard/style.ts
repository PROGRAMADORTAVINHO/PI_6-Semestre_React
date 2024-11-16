import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; /* Alinha as linhas de gráficos verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  margin-top: 10px;
`;

const ContainerPart1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0; /* Adicionando margem uniforme para alinhamento */
`;

const ContainerPart2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0; /* Garantir que a margem seja igual ao ContainerPart1 */
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
  margin-top: 30px;
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const AccelerationZ = styled.div`
  margin-top: 30px;
  background-color: #fff;
  width: 100%;
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
`;

export {
  AccelerationX,
  AccelerationY,
  AccelerationZ,
  ChartsContainer,
  ContainerPart1,
  ContainerPart2,
  MainContainer,
  Temperatura,
};
