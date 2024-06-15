import {Outlet, useNavigate} from "react-router-dom";
import { Menu } from 'antd';
import {headerItems} from "../../helpers/headerItems";
import {useState} from "react";
import './Header.scss';

export const Header = () => {
    const [current, setCurrent] = useState('mail');
    const navigate = useNavigate();
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <header>
                <div>
                    <nav>
                        <ul>
                            <li className="header__logo">
                                Realt
                            </li>
                            <li>
                                <Menu
                                    className="menu__item"
                                    onClick={onClick}
                                    selectedKeys={[current]}
                                    mode="horizontal"
                                    items={headerItems}
                                />
                            </li>
                            <li className="header__buttons-container">
                                <div className="header__enter-button">
                                    <button onClick={() => navigate('/login')}>
                                        Войти
                                    </button>
                                </div>
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