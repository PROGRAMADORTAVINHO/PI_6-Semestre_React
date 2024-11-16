import { Link } from 'react-router-dom';
import { Container, Logo, Navbar, NavItem, NavLink, NavList } from './style';

const Header = () => {
  return (
    <Container>
      <Navbar>
        <NavList>
          <NavItem>
            <NavLink>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Logo src={require('../../assets/logo-senac.png')} alt='' />
              </Link>
            </NavLink>
          </NavItem>

          <NavItem>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <NavLink href='#'>Dashboard</NavLink>
            </Link>
          </NavItem>

          <NavItem>
            <Link to='/galeria' style={{ textDecoration: 'none' }}>
              <NavLink href='#'>Galeria</NavLink>
            </Link>
          </NavItem>

          <NavItem>
            <Link to='/sobre' style={{ textDecoration: 'none' }}>
              <NavLink href='#'>Sobre</NavLink>
            </Link>
          </NavItem>
        </NavList>
      </Navbar>
    </Container>
  );
};

export default Header;
