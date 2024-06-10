import {Link, Outlet} from "react-router-dom";
import { Menu } from 'antd';
import {headerItems} from "../../helpers/headerItems";
import {useState} from "react";

export const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <header>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={headerItems} />
            </header>
            <main>
                <div>
                    <Outlet/>
                </div>
            </main>
        </>
    );
}