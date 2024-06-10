import {Link, Outlet} from "react-router-dom";
import { Menu } from 'antd';
import {headerItems} from "../../helpers/headerItems";
import {useState} from "react";
import './Header.scss';

export const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <header>
                <div>
                    <h1>Realt</h1>
                    <Menu className="menu" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={headerItems} />
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