import styled from 'styled-components';
import GlobalStyle from '../../GlobalStyle';

export const Container = styled.header`
  width: 100%;
  background-color: ${GlobalStyle.bg_color};
  font-family: ${GlobalStyle.font};
  padding: 10px 0;
`;

export const Logo = styled.img`
  width: 40px;
  height: auto;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 30px; /* Reduz o tamanho do logo em telas menores */
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; /* Coloca os itens em coluna */
    gap: 10px; /* Espaçamento entre os itens */
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Torna a lista vertical */
    gap: 15px; /* Ajusta o espaçamento */
  }

  @media (max-width: 480px) {
    gap: 10px; /* Reduz o espaçamento em telas muito pequenas */
  }
`;

export const NavItem = styled.li`
  display: inline-block;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: ${GlobalStyle.color};
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Reduz o tamanho da fonte para telas menores */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Fonte ainda menor para dispositivos muito pequenos */
  }
`;
