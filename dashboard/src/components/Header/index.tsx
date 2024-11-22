import { Link } from 'react-router-dom';
import { 
  Container,
  Logo,
  Navbar,
  NavItem,
  NavLink,
  NavList
} from './style';
import NotificationMenu from '../BtnNotificacao';
import { z } from 'zod';
import { useState, useEffect } from 'react';
import axios from 'axios';

const notificationSchema = z.object({
  id: z.number(),
  data_id: z.number(),
  title: z.string(),
  body: z.string(),
  created_at: z.string()
});

type Notification = z.infer<typeof notificationSchema>;

const Header = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]); // Estado para armazenar notificações

  const fetchNotifications = async () => {
    try {
      const response = await axios.get<Notification[]>('https://api-fkun.onrender.com/notifications');
      setNotifications(response.data);
    } catch (error) {
      console.error('Erro ao buscar notificações:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
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

          <NotificationMenu notifications={notifications.map(notification => notification.title)} />

        </NavList>
      </Navbar>
    </Container>
  );
};

export default Header;
