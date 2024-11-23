import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import NotificationMenu from '../BtnNotificacao';
import { Container, Logo, Navbar, NavItem, NavLink, NavList } from './style';

const notificationSchema = z.object({
  id: z.number(),
  data_id: z.number(),
  title: z.string(),
  body: z.string(),
  created_at: z.string(),
});

type Notification = z.infer<typeof notificationSchema>;

const Header = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]); // Estado para armazenar notificações

  const fetchNotifications = async () => {
    try {
      const response = await axios.get<Notification[]>(
        `${process.env.REACT_APP_API_URL}/notifications`
      );
      setNotifications(response.data);
    } catch (error) {
      console.error('Erro ao buscar notificações:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();

    const interval = setInterval(() => {
      fetchNotifications();
    }, 5000);
  }, []);

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

          <NotificationMenu
            notifications={notifications.map(
              (notification) => notification.title
            )}
          />
        </NavList>
      </Navbar>
    </Container>
  );
};

export default Header;
