import React, { useState, useEffect } from 'react';
import './style.css';

// Tipagem para as props
interface NotificationMenuProps {
    notifications: string[]; // Lista de notificações recebida como props
}

const NotificationMenu: React.FC<NotificationMenuProps> = ({ notifications }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // Alterna a exibição do menu
    const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setIsMenuOpen((prev) => !prev);
    };

    // Fecha o menu ao clicar fora dele
    const handleClickOutside = (event: MouseEvent) => {
        const menu = document.getElementById('notification-menu');
        if (menu && !menu.contains(event.target as Node)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div>
            <div className="container_btn">
            <button type="button" className="icon-button" id="notification-btn" onClick={toggleMenu}>
                <span className="material-icons">notifications</span>
                <span className="icon-button__badge">{notifications.length}</span>
            </button>
            
            {isMenuOpen && (
                <div
                    id="notification-menu"
                    className="notification-menu"
                    style={{
                        display: 'block',
                        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5);',
                        padding: '10px',
                        width: '300px',
                    }}
                >
                    <p className="notification-title">Notificações</p>
                    {notifications.length > 0 ? (
                        <ul
                        style={{
                            display: 'block',
                            boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5);',
                            padding: '10px',
                            width: '300px',
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
