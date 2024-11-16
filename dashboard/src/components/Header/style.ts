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
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;
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
`;
