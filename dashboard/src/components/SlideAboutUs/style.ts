import styled from 'styled-components';
import GlobalStyle from '../../GlobalStyle';

export const Title_teams = styled.div`
  font-family: ${GlobalStyle.font};
  color: ${GlobalStyle.color};
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: xx-large;
  margin-top: 2%;
`;

export const Container_carousel = styled.div`
  background-color: ${GlobalStyle.bg_color};
  max-width: 900px;
  width: 100%;
  margin: auto;
`;

export const Container_slide = styled.div``;

export const Slide = styled.div`
  background-color: ${GlobalStyle.bg_color};
  height: 400px;
  padding: 6px;
`;

export const Foto = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  margin-top: 10px;
  height: 13rem;
  width: 13rem;
  border-radius: 5px;
`;

export const Content = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
