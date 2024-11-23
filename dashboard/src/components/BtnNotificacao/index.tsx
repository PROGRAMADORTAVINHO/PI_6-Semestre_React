import React, { useEffect, useState } from 'react';
import './style.css';

interface NotificationMenuProps {
  notifications: string[];
}

const NotificationMenu: React.FC<NotificationMenuProps> = ({
  notifications,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [hasClicked, setHasClicked] = useState<boolean>(() => {
    const storedHasClicked = localStorage.getItem('hasClicked');
    return storedHasClicked ? JSON.parse(storedHasClicked) : false;
  });

  const [storedNotifications, setStoredNotifications] = useState<string[]>(
    () => {
      const stored = localStorage.getItem('storedNotifications');
      return stored ? JSON.parse(stored) : [];
    }
  );

  const [unreadCount, setUnreadCount] = useState<number>(() => {
    if (hasClicked) {
      const newNotifications = notifications.filter(
        (notif) => !storedNotifications.includes(notif)
      );
      return newNotifications.length > 10 ? 10 : newNotifications.length;
    } else {
      return notifications.length > 10 ? 10 : notifications.length;
    }
  });

  useEffect(() => {
    if (hasClicked) {
      const newNotifications = notifications.filter(
        (notif) => !storedNotifications.includes(notif)
      );
      const updatedUnreadCount =
        newNotifications.length > 10 ? 10 : newNotifications.length;
      setUnreadCount(updatedUnreadCount);
      localStorage.setItem('unreadCount', updatedUnreadCount.toString());
    } else {
      const count = notifications.length > 10 ? 10 : notifications.length;
      setUnreadCount(count);
      localStorage.setItem('unreadCount', count.toString());
    }
  }, [notifications, hasClicked, storedNotifications]);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMenuOpen((prev) => !prev);

    if (!hasClicked) {
      setUnreadCount(0);
      setHasClicked(true);
      setStoredNotifications(notifications);
      localStorage.setItem('hasClicked', 'true');
      localStorage.setItem('unreadCount', '0');
      localStorage.setItem(
        'storedNotifications',
        JSON.stringify(notifications)
      );
    } else {
      setUnreadCount(0);
      setStoredNotifications(notifications);
      localStorage.setItem('unreadCount', '0');
      localStorage.setItem(
        'storedNotifications',
        JSON.stringify(notifications)
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('notification-menu');
      if (menu && !menu.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className='container_btn'>
        <button
          type='button'
          className='icon-button'
          id='notification-btn'
          onClick={toggleMenu}
        >
          <span className='material-icons'>notifications</span>
          {unreadCount > 0 && (
            <span className='icon-button__badge'>{unreadCount}</span>
          )}
        </button>

        {isMenuOpen && (
          <div
            id='notification-menu'
            className='notification-menu'
            style={{
              display: 'block',
              boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
              padding: '10px',
              width: '300px',
            }}
          >
            <p className='notification-title'>Notificações</p>
            {notifications.length > 0 ? (
              <ul
                style={{
                  padding: '0',
                  margin: '0',
                }}
              >
                {notifications.map((notif, index) => (
                  <li
                    key={index}
                    style={{
                      padding: '10px 15px',
                      borderBottom: '1px solid #eeeeee',
                      fontSize: '14px',
                      listStyleType: 'none',
                    }}
                  >
                    {notif}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Sem notificações</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationMenu;
