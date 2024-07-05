import { Link, Outlet, useNavigate } from "react-router-dom";
import { Menu } from 'antd';
import { useState, useEffect } from "react";
import './Header.scss';
import { useAuth } from "../../contexts/AuthContext";
import getHeaderItems from "../../helpers/headerItems";

export const Header = () => {
    const [current, setCurrent] = useState('mail');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const { userStatus } = useAuth();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token || userStatus) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [userStatus]);

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <>
            <header>
                <div>
                    <nav>
                        <ul>
                            <li className="header__logo">
                                <Link className="header__logo-link" to='/'>Realt</Link>
                            </li>
                            <li>
                                <Menu
                                    className="menu__item"
                                    onClick={onClick}
                                    selectedKeys={[current]}
                                    mode="horizontal"
                                    items={getHeaderItems(isLoggedIn, userStatus)}
                                />
                            </li>
                            <li className="header__buttons-container">
                                {!isLoggedIn && (
                                    <div className="header__enter-button">
                                        <button onClick={() => navigate('/register')}>
                                            Войти
                                        </button>
                                    </div>
                                )}
                                <div className="header__advertisement-button">
                                    <button onClick={() => navigate('/addAdvertisement')}>
                                        Добавить объявление
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <div>
                    <Outlet/>
                </div>
            </main>
        </>
    );
}
